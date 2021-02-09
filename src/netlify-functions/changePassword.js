const crypting = require("./private/crypting");
const db = require("./private/db");
const logging = require("./private/logging");
const responding = require("./private/responding");

// this i a workaround for issue https://github.com/netlify/netlify-lambda/issues/201
require("encoding");

exports.handler = function register(event, context, callback = () => {}) {
  logging.logStart("Start change password");
  const respond = responding.responseHandlers(callback);

  const { sessionId, oldPassword, password } = JSON.parse(event.body);

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
        oldPassword,
        dbUser.salt,
        dbUser.hash
      );
      logging.log(`Password is ${correct ? "correct" : "invalid"}`);
      return correct ? fetched : Promise.reject();
    })
    .then((fetched) => {
      logging.log(`Update account with email: ${fetched.data.email}`);

      const paramObject = {
        data: { hash: crypting.hash(password + fetched.data.salt) },
      };
      return db.do.updateDocument(fetched.ref, paramObject);
    })
    .then(() => {
      logging.log(`Changed password`);
      return "success";
    })
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};
