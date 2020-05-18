/* eslint-disable no-console */
const faunadb = require("faunadb");
const crypto = require("crypto");

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
};

// Event format [src](https://docs.netlify.com/functions/build-with-javascript/#format)
exports.handler = function register(event, context, callback) {
  console.log("Start login process");

  const { email, password } = helpers.parseEventBody(event.body);
  console.log(`Requesting user with email: ${email}`);
  db.fetchUser(email)
    .then((fetched) => {
      const dbUser = fetched.data;
      console.log(`Retrieved user with email: ${dbUser.email}`);

      const correct = helpers.verifyPassword(
        password,
        dbUser.salt,
        dbUser.hash
      );
      console.log(`Password is ${correct ? "correct" : "invalid"}`);
    })
    .catch((e) => {
      console.log(`Error: ${e}`);
    });
};

exports.__testonly__ = { helpers };
