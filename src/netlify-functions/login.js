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
};

exports.__testonly__ = { helpers };
