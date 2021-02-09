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
const responding = require("./private/responding");

// this i a workaround for issue https://github.com/netlify/netlify-lambda/issues/201
require("encoding");

exports.handler = function register(event, context, callback = () => {}) {
  logging.logStart("Start delete account");
  const respond = responding.responseHandlers(callback);

  const { sessionId, password } = JSON.parse(event.body);

  logging.log(`Request session with sessionId.`);
  db.get
    .sessionBySessionId(sessionId)
    .then((fetched) => {
      logging.log(`Request user with email: ${fetched.data.email}`);
      return db.get.userByEmail(fetched.data.email);
    })
    .then((fetched) => {
      const dbUser = fetched.data;
      logging.log(`Retrieved user with email: ${dbUser.email}`);
      const correct = crypting.verifyPassword(
        password,
        dbUser.salt,
        dbUser.hash
      );
      logging.log(`Password is ${correct ? "correct" : "invalid"}`);
      return correct ? fetched : Promise.reject();
    })
    .then((fetched) => {
      logging.log(`Delete user with email ${fetched.data.email}.`);
      return db.do.deleteDocument(fetched.ref);
    })
    .then(() => {
      logging.log(`Deleted user.\nCompose email.`);
      return "success";
    })
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};
