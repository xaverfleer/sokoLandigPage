// Event format [src](https://docs.netlify.com/functions/build-with-javascript/#format)
// {
//     "path": "Path parameter",
//     "httpMethod": "Incoming request's method name"
//     "headers": {Incoming request headers}
//     "queryStringParameters": {query string parameters }
//     "body": "A JSON string of the request payload."
//     "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// }

const logging = require("./private/logging");
const mailing = require("./private/mailing");
const responseHandlers = require("./private/responseHandlers");

exports.handler = function absenden(event, context, callback) {
  logging.logStart("Start absenden");
  const respond = responseHandlers(callback);

  const decoded = decodeURIComponent(event.body);
  logging.log(`decoded: ${decoded}`);

  const msg = {
    to: "xaver.fleer+sokokurs@gmail.com",
    subject: "Subscription for Early-Bird course",
    text: decoded,
  };
  logging.log("sending email");

  mailing
    .sendEmail(msg)
    .catch(logging.logAndReject)
    .then(respond.success)
    .catch(logging.logAndReject)
    .catch(respond.failed);
};
