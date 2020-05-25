const faunadb = require("faunadb");
const crypto = require("crypto");
const logging = require("./private/logging");
const responseHandlers = require("./private/responseHandlers");

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
};

const db = {
  fetchUser(email) {
    const q = faunadb.query;
    const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
    const userPromise = client.query(
      q.Get(q.Match(q.Index("userByEmail"), email))
    );
    return userPromise;
  },
  createSession(email) {
    const q = faunadb.query;
    const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
    const payload = {
      sessionId: crypto.randomBytes(16).toString("base64"),
      email,
    };
    const promise = client.query(
      q.Create(q.Collection("sessions"), { data: payload })
    );
    return promise;
  },
};

// Event format [src](https://docs.netlify.com/functions/build-with-javascript/#format)
exports.handler = function register(event, context, callback) {
  logging.logStart("Start login");
  const respond = responseHandlers(callback);

  const { email, password } = helpers.parseEventBody(event.body);

  logging.log(`Requesting user with email: ${email}`);
  db.fetchUser(email)
    .catch(logging.logAndReject)
    .then((fetched) => {
      const dbUser = fetched.data;
      logging.log(`Retrieved user with email: ${dbUser.email}`);
      const correct = helpers.verifyPassword(
        password,
        dbUser.salt,
        dbUser.hash
      );
      logging.log(`Password is ${correct ? "correct" : "invalid"}`);
      return correct
        ? Promise.resolve(dbUser.email)
        : Promise.reject(new Error("Unauthorized"));
    })
    .catch(logging.logAndReject)
    .then(db.createSession)
    .catch(logging.logAndReject)
    .then((response) => {
      logging.log(`Successfully logged in.`);
      return Promise.resolve({ sessionId: response.data.sessionId });
    })
    .then(respond.success)
    .catch(logging.logAndReject)
    .catch(respond.failed);
};

exports.__testonly__ = { helpers };
