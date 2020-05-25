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
const logging = require("./private/logging");
const mailing = require("./private/mailing");
const responseHandlers = require("./private/responseHandlers");

// this i a workaround for issue https://github.com/netlify/netlify-lambda/issues/201
require("encoding");

const helpers = {
  composeUser(email, password) {
    logging.log("starting `createUser`");
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
      subject: "Bestätige deine E-Mail-Adresse",
      text: `Vielen Dank für deine Anmeldung auf so-kommunizieren.ch.\n\nKlicke auf den Link um dein Konto zu bestätigen: https://so-kommunizieren.ch/kurs?confirmationCode=${encodeURIComponent(
        cofirmationCode
      )}#/confirm-email/\n\nFalls du kein Konto erstellen wolltest, kannst du diese E-Mail ignorieren.`,
    };
    return Promise.resolve({ message });
  },
};

exports.handler = function register(event, context, callback = () => {}) {
  logging.logStart("Start register");

  const respond = responseHandlers(callback);
  const decoded = decodeURIComponent(event.body);
  const parsed = JSON.parse(decoded);

  logging.log(`Register user with email: ${parsed.email}`);
  helpers
    .createUser(parsed.email, parsed.password)
    .catch(logging.logAndReject)
    .then((response) => {
      return helpers.composeEmail(
        response.data.email,
        response.data.confirmationCode
      );
    })
    .catch(logging.logAndReject)
    .then(({ message }) => {
      return mailing.sendEmail(message);
    })
    .catch(logging.logAndReject)
    .then(respond.success)
    .catch(logging.logAndReject)
    .catch(respond.failed);
};

exports.__testonly__ = { helpers };
