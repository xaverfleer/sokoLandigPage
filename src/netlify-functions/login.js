/* eslint-disable no-console */
// Event format [src](https://docs.netlify.com/functions/build-with-javascript/#format)
// {
//     "path": "Path parameter",
//     "httpMethod": "Incoming request's method name"
//     "headers": {Incoming request headers}
//     "queryStringParameters": {query string parameters }
//     "body": "A JSON string of the request payload."
//     "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// }
const faunadb = require("faunadb");
const helpers = {
  eventToEmail(event) {
    const decoded = decodeURIComponent(event.body);
    const parsed = JSON.parse(decoded);

    console.log(`eventToEmail returns ${parsed.email}`);

    return parsed.email;
  },

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

exports.handler = function register(event, context, callback) {
  console.log("Start login process");

  const email = helpers.eventToEmail(event);
  console.log(`Requesting user with email: ${email}`);
  db.fetchUser(email)
    .then((fetched) => {
      const user = fetched.data;
      console.log(`Retrieved user: ${JSON.stringify(user)}`);
    })
    .catch((e) => {
      console.log(`Error: ${e}`);
    });
};

exports.__testonly__ = { helpers };
