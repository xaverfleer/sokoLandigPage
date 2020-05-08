/* eslint-disable no-console */
require("dotenv").config();
const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });

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
