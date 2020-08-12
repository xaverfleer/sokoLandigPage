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
const responding = require("./private/responding");

exports.handler = function absenden(event, context, callback) {
  logging.logStart("Start order");
  const respond = responding.responseHandlers(callback);

  logging.log(`event.body: ${event.body}`);

  const msg = {
    to: "xaver.fleer+sokokurs@gmail.com",
    subject: "Paypal paid order for Early-Bird",
    text: event.body,
  };
  logging.log("sending email");

  mailing
    .sendEmail(msg)
    .then(() => "success")
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};
