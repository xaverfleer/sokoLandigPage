const crypto = require("crypto");
const db = require("./private/db");
const logging = require("./private/logging");
const responding = require("./private/responding");

const helpers = {
  parseEventBody(body) {
    const decoded = decodeURIComponent(body);
    const parsed = JSON.parse(decoded);
    return parsed;
  },
  verifyPassword(password, dbSalt, dbHash) {
    const hash = crypto
      .createHash("md5")
      .update(password + dbSalt)
      .digest("hex");
    return hash === dbHash;
  },
  createSessionId: () => crypto.randomBytes(16).toString("base64"),
};

// Event format [src](https://docs.netlify.com/functions/build-with-javascript/#format)
exports.handler = function register(event, context, callback) {
  logging.logStart("Start login");
  const respond = responding.responseHandlers(callback);

  const { email, password } = helpers.parseEventBody(event.body);

  logging.log(`Requesting user with email: ${email}`);
  db.userByEmail(email)
    .then((fetched) => {
      const dbUser = fetched.data;
      logging.log(`Retrieved user with email: ${dbUser.email}`);
      const correct = helpers.verifyPassword(
        password,
        dbUser.salt,
        dbUser.hash
      );
      logging.log(`Password is ${correct ? "correct" : "invalid"}`);
      return correct ? dbUser.email : Promise.reject();
    })
    .then(db.doesSessionExist)
    .then((doesSessionExist) => {
      logging.log(`Session${doesSessionExist ? " DOES" : " does NOT"} exist`);
      return doesSessionExist
        ? db
            .sessionByEmail(email)
            .then((fetched) => db.updateDocument(fetched.ref, {}))
        : db.createSession({
            data: { email, sessionId: helpers.createSessionId() },
          });
    })
    .then((response) => {
      logging.log(`Successfully logged in.`);
      return Promise.resolve(
        JSON.stringify({ sessionId: response.data.sessionId })
      );
    })
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};

exports.__testonly__ = { helpers };
