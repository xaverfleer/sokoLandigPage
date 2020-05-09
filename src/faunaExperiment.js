/* eslint-disable no-console */
require("dotenv").config();
const crypto = require("crypto");
const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });

const helpers = {
  createTimestamp() {
    return new Date().toISOString();
  },
  handleSuccess(response) {
    console.log(`success ${response}`);
  },
  handleError(error) {
    console.log(`error: ${error}`);
  },
};

// eslint-disable-next-line no-unused-vars
function createUser(email, password) {
  const salt = crypto.randomBytes(16).toString("base64");
  const hash = crypto
    .createHash("md5")
    .update(password + salt)
    .digest("hex");

  const payload = { email, hash, salt };

  client
    .query(q.Create(q.Collection("users"), { data: payload }))
    .then(helpers.handleSuccess)
    .catch(helpers.handleError);
}

// eslint-disable-next-line no-unused-vars
function getSampleUser() {
  client
    .query(q.Get(q.Match(q.Index("email"), "muster@gmail.com")))
    .then(helpers.handleSuccess)
    .catch(helpers.handleError);
}

// eslint-disable-next-line no-unused-vars
function createSession(email) {
  const sessionId = crypto.randomBytes(16).toString("base64");
  const timestamp = helpers.createTimestamp();
  const payload = { email, sessionId, timestamp };

  client
    .query(q.Create(q.Collection("sessions"), { data: payload }))
    .then(helpers.handleSuccess)
    .catch(helpers.handleError);
}

// eslint-disable-next-line no-unused-vars
function clearSessions(userEmail) {
  client
    .query(
      q.Foreach(
        q.Paginate(q.Match(q.Index("sessionByEmail"), userEmail)),
        q.Lambda((ref) => q.Delete(ref))
      )
    )
    .then(helpers.handleSuccess)
    .catch(helpers.handleError);
}

// eslint-disable-next-line no-unused-vars
function updateSessionTimestamp(email) {
  const changes = {
    data: { timestamp: helpers.createTimestamp() },
  };
  client
    .query(
      q.Foreach(
        q.Paginate(q.Match(q.Index("sessionByEmail"), email)),
        q.Lambda((ref) => q.Update(ref, changes))
      )
    )
    .then(helpers.handleSuccess)
    .catch(helpers.handleError);
}

const email = "ignore@me.com";
// createSession(email);
// clearSessions(email);
updateSessionTimestamp(email);
