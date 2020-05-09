/* eslint-disable no-console */
require("dotenv").config();
const crypto = require("crypto");
const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });

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
    .then(() => {
      console.log("success");
    })
    .catch((error) => {
      console.log(`error: ${error}`);
    });
}

// eslint-disable-next-line no-unused-vars
function getSampleUser() {
  client
    .query(q.Get(q.Match(q.Index("email"), "muster@gmail.com")))
    .then((response) => {
      console.log(`success ${response}`);
    })
    .catch((error) => {
      console.log(`error: ${error}`);
    });
}
