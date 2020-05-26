// Event format [src](https://docs.netlify.com/functions/build-with-javascript/#format)
// {
//     "path": "Path parameter",
//     "httpMethod": "Incoming request's method name"
//     "headers": {Incoming request headers}
//     "queryStringParameters": {query string parameters }
//     "body": "A JSON string of the request payload."
//     "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// }
const crypto = require("crypto");
const db = require("./private/db");
const logging = require("./private/logging");
const mailing = require("./private/mailing");
const responding = require("./private/responding");

// this i a workaround for issue https://github.com/netlify/netlify-lambda/issues/201
require("encoding");

const helpers = {
  composeUser(email, password) {
    const salt = crypto.randomBytes(16).toString("base64");
    const confirmationCode = crypto.randomBytes(16).toString("base64");
    const isConfirmed = false;
    const hash = crypto
      .createHash("md5")
      .update(password + salt)
      .digest("hex");

    return { data: { email, hash, salt, confirmationCode, isConfirmed } };
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
  const respond = responding.responseHandlers(callback);

  const parsed = JSON.parse(event.body);

  logging.log(`Register user with email: ${parsed.email}`);
  const newUserParams = helpers.composeUser(parsed.email, parsed.password);

  logging.log(`Check if user exists. User email: ${parsed.email}`);
  db.doesUserExist(parsed.email)
    .then((doesUserExist) => {
      logging.log(`User${doesUserExist ? " DOES" : " does NOT"} exist.`);
      return doesUserExist
        ? Promise.reject(new Error("User already exists"))
        : Promise.resolve(newUserParams);
    })
    .catch(logging.logAndReject)
    .then((newUserParams) => db.createUser())
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
