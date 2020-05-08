/* eslint-disable no-console */
require("dotenv").config();
const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });

// eslint-disable-next-line no-unused-vars
function createDefaultUser() {
  const createdRecord = q.Create(q.Collection("users"), {
    data: { email: "blah@blah.blah", pw: "blahdiblah" },
  });

  client
    .query(createdRecord)
    .then(() => {
      console.log("success");
    })
    .catch((error) => {
      console.log(`error: ${error}`);
    });
}

client
  .query(q.Get(q.Match(q.Index("email"), "muster@gmail.com")))
  .then((response) => {
    console.log(`success ${response}`);
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });
