const crypting = require("./private/crypting");
const db = require("./private/db");
const logging = require("./private/logging");
const responding = require("./private/responding");

const helpers = {
  parseEventBody(body) {
    const decoded = decodeURIComponent(body);
    const parsed = JSON.parse(decoded);
    return parsed;
  },
};

// Event format [src](https://docs.netlify.com/functions/build-with-javascript/#format)
exports.handler = function register(event, context, callback) {
  logging.logStart("Start login");
  const respond = responding.responseHandlers(callback);
  let dbUser;

  const { email, password } = helpers.parseEventBody(event.body);

  logging.log(`Requesting user with email: ${email}`);
  db.get
    .userByEmail(email)
    .then((fetched) => {
      dbUser = fetched.data;
      logging.log(`Retrieved user with email: ${dbUser.email}`);
      const correct = crypting.verifyPassword(
        password,
        dbUser.salt,
        dbUser.hash
      );
      logging.log(`Password is ${correct ? "correct" : "invalid"}`);
      return correct ? dbUser.email : Promise.reject();
    })
    .then(db.get.doesSessionExist)
    .then((doesSessionExist) => {
      logging.log(`Session${doesSessionExist ? " DOES" : " does NOT"} exist`);
      return doesSessionExist
        ? db.get
            .sessionByEmail(email)
            .then((fetched) => db.do.updateDocument(fetched.ref, {}))
        : db.do.createSession({
            data: { email, sessionId: crypting.randomString() },
          });
    })
    .then((response) => {
      logging.log(`Successfully logged in.`);
      return Promise.resolve(
        JSON.stringify({
          email: response.data.email,
          isPaidAccount: dbUser.isPaidAccount,
          sessionId: response.data.sessionId,
          ts: response.ts,
        })
      );
    })
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};

exports.__testonly__ = { helpers };
