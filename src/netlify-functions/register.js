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

// this i a workaround for issue https://github.com/netlify/netlify-lambda/issues/201
require("encoding");

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

    const promise = client.query(
      q.Create(q.Collection("users"), { data: payload })
    );
    return promise;
  },
};

exports.handler = function register(event, context, callback = () => {}) {
  console.log("Start registering");

  const decoded = decodeURIComponent(event.body);
  const parsed = JSON.parse(decoded);

  console.log(`Register user with email email: ${parsed.email}`);
  helpers
    .createUser(parsed.email, parsed.password)
    .then(function handleSuccess() {
      callback(null, {
        statusCode: 200,
        body: "User is registered.",
      });
    })
    .catch(function handleError(e) {
      callback(e, {
        statusCode: 500,
        body: `Failed with error: + ${e}`,
      });
    });
};

exports.__testonly__ = { helpers };
