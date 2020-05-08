/* eslint-disable no-console */
require("dotenv").config();
const faunadb = require("faunadb");

const q = faunadb.query;

const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
const collection = q.Collection("users");

const newDoc = {
  data: {
    email: "blah@blah.blah",
    pw: "blahdiblah",
  },
};
const createdRecord = q.Create(collection, newDoc);

client
  .query(createdRecord)
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });
