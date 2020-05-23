/* eslint-disable no-console */
// Event format [src](https://docs.netlify.com/functions/build-with-javascript/#format)
// {
//     "path": "Path parameter",
//     "httpMethod": "Incoming request's method name"
//     "headers": {Incoming request headers}
//     "queryStringParameters": {query string parameters }
//     "body": "A JSON string of the request payload."
//     "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// }
const faunadb = require("faunadb");
const crypto = require("crypto");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// this i a workaround for issue https://github.com/netlify/netlify-lambda/issues/201
require("encoding");

const helpers = {
  composeUser(email, password) {
    console.log("starting `createUser`");
    const salt = crypto.randomBytes(16).toString("base64");
    const confirmationCode = crypto.randomBytes(16).toString("base64");
    const isConfirmed = false;
    const hash = crypto
      .createHash("md5")
      .update(password + salt)
      .digest("hex");

    return { email, hash, salt, confirmationCode, isConfirmed };
  },

  createUser(email, password) {
    const q = faunadb.query;
    const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });

    const payload = this.composeUser(email, password);
    const promise = client.query(
      q.Create(q.Collection("users"), { data: payload })
    );
    return promise;
  },

  composeEmail(email, cofirmationCode) {
    const message = {
      to: email,
      from: "kurs@so-kommunizieren.ch",
      subject: "Bestätige deine E-Mail-Adresse",
      text: `Vielen Dank für deine Anmeldung auf so-kommunizieren.ch.\n\nKlicke auf den Link um dein Konto zu bestätigen: https://so-kommunizieren.ch/.netlify/functions/confirmEmail?confirmationCode=${cofirmationCode}\n\nFalls du kein Konto erstellen wolltest, kannst du diese E-Mail ignorieren.`,
    };
    return Promise.resolve({ message });
  },
};

exports.handler = function register(event, context, callback = () => {}) {
  console.log("Start registering");

  const decoded = decodeURIComponent(event.body);
  const parsed = JSON.parse(decoded);

  console.log(`Register user with email email: ${parsed.email}`);
  helpers
    .createUser(parsed.email, parsed.password)
    .catch(() => Promise.reject(new Error("Could not register user")))
    .then((response) => {
      return helpers.composeEmail(
        response.data.email,
        response.data.confirmationCode
      );
    })
    .catch((e) =>
      Promise.reject(new Error(e.message || "Could not compose user"))
    )
    .then(({ message }) => {
      return sgMail.send(message);
    })
    .catch((e) =>
      Promise.reject(
        new Error(e.message || "Could not send confirmation email")
      )
    )
    .then(function handleSuccess() {
      callback(null, {
        statusCode: 200,
        body: "User is registered.",
      });
    })
    .catch(function handleError(e) {
      callback(e, {
        statusCode: 500,
        body: `Failed with error: + ${e}`,
      });
    });
};

exports.__testonly__ = { helpers };
