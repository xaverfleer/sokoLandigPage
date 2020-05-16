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
const crypto = require("crypto");

const helpers = {
  handleSuccess(response) {
    console.log(`success: ${response}`);
  },

  handleError(error) {
    console.log(`error: ${error}`);
  },

  composeUser(email, password) {
    console.log("starting `createUser`");
    const salt = crypto.randomBytes(16).toString("base64");
    const hash = crypto
      .createHash("md5")
      .update(password + salt)
      .digest("hex");

    return { email, hash, salt };
  },

  createUser(email, password) {
    const q = faunadb.query;
    const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });

    const payload = this.composeUser(email, password);
    console.log(`user payload: ${JSON.stringify(payload)}`);

    client
      .query(q.Create(q.Collection("users"), { data: payload }))
      .then(helpers.handleSuccess)
      .catch(helpers.handleError);
  },
};

exports.handler = function register(event) {
  console.log("Start registering");

  const decoded = decodeURIComponent(event.body);
  const parsed = JSON.parse(decoded);

  console.log(`Register user with email email: ${parsed.email}`);
  helpers.createUser(parsed.email, parsed.password);
};

exports.__testonly__ = { helpers };
