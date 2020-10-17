// Event format [src](https://docs.netlify.com/functions/build-with-javascript/#format)
// {
//     "path": "Path parameter",
//     "httpMethod": "Incoming request's method name"
//     "headers": {Incoming request headers}
//     "queryStringParameters": {query string parameters }
//     "body": "A JSON string of the request payload."
//     "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// }
const crypting = require("./private/crypting");
const db = require("./private/db");
const logging = require("./private/logging");
const mailing = require("./private/mailing");
const responding = require("./private/responding");

// this i a workaround for issue https://github.com/netlify/netlify-lambda/issues/201
require("encoding");

const helpers = {
  composeUser(email, password) {
    const salt = crypting.randomString();
    const confirmationCode = crypting.randomString();
    const hash = crypting.hash(password + salt);
    const isConfirmed = false;
    const isPaidAccount = false;

    return {
      data: { email, hash, salt, confirmationCode, isConfirmed, isPaidAccount },
    };
  },

  composeEmail(email, cofirmationCode) {
    const message = {
      to: email,
      bcc: "eva.fleer@gmail.com",
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

  const newUserParams = helpers.composeUser(parsed.email, parsed.password);

  logging.log(`Check if user exists. User email: ${parsed.email}`);
  db.get
    .doesUserExist(parsed.email)
    .then((doesUserExist) => {
      logging.log(`User${doesUserExist ? " DOES" : " does NOT"} exist.`);
      return doesUserExist
        ? Promise.reject(new Error("User already exists"))
        : Promise.resolve(newUserParams);
    })
    .then((userParams) => {
      logging.log(`Create user with email ${userParams.data.email}.`);
      return db.do.createUser(userParams);
    })
    .then((response) => {
      logging.log(`Created︎ user.\nCompose email.`);
      return helpers.composeEmail(
        response.data.email,
        response.data.confirmationCode
      );
    })
    .then(({ message }) => {
      logging.log(`Send email.`);
      return mailing.sendEmail(message);
    })
    .then(() => "success")
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};

exports.__testonly__ = { helpers };
