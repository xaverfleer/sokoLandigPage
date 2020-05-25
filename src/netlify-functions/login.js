const faunadb = require("faunadb");
const crypto = require("crypto");
const { log } = require("./private/logging");

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

function responseHandlers(callback) {
  return {
    failed(e) {
      callback(e, {
        statusCode: 500,
        body: `Failed with error: + ${e.message}`,
      });
    },
    success(data) {
      callback(null, {
        statusCode: 200,
        body: encodeURIComponent(JSON.stringify(data)),
      });
    },
  };
}

// Event format [src](https://docs.netlify.com/functions/build-with-javascript/#format)
exports.handler = function register(event, context, callback) {
  const respond = responseHandlers(callback);
  log("Start login process");
  const { email, password } = helpers.parseEventBody(event.body);

  log(`Requesting user with email: ${email}`);
  db.fetchUser(email)
    .catch(() => Promise.reject(new Error("Unauthorized")))
    .then((fetched) => {
      const dbUser = fetched.data;
      log(`Retrieved user with email: ${dbUser.email}`);
      const correct = helpers.verifyPassword(
        password,
        dbUser.salt,
        dbUser.hash
      );
      log(`Password is ${correct ? "correct" : "invalid"}`);
      return correct
        ? Promise.resolve(dbUser.email)
        : Promise.reject(new Error("Unauthorized"));
    })
    .catch((e = {}) => Promise.reject(new Error(e.message || "Unauthorized")))
    .then(db.createSession)
    .catch((e = {}) =>
      Promise.reject(new Error(e.message || "Could not create session"))
    )
    .then((response) => {
      log(`Successfully logged in.`);

      return Promise.resolve({ sessionId: response.data.sessionId });
    })
    .then(respond.success)
    .catch(respond.failed);
};

exports.__testonly__ = { helpers };
