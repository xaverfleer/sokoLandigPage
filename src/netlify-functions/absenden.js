// Event format [src](https://docs.netlify.com/functions/build-with-javascript/#format)
// {
//     "path": "Path parameter",
//     "httpMethod": "Incoming request's method name"
//     "headers": {Incoming request headers}
//     "queryStringParameters": {query string parameters }
//     "body": "A JSON string of the request payload."
//     "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// }

const sgMail = require("@sendgrid/mail");
const logging = require("./private/logging");
const responseHandlers = require("./private/responseHandlers");

exports.handler = function absenden(event, context, callback) {
  logging.log("starting");

  const respond = responseHandlers(callback);
  const decoded = decodeURIComponent(event.body);
  logging.log(`decoded: ${decoded}`);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "xaver.fleer+sokokurs@gmail.com",
    from: "noreply@so-kommunizieren.com",
    subject: "Subscription for Early-Bird course",
    text: decoded,
  };
  logging.log("sending email");

  sgMail
    .send(msg)
    .catch(logging.logAndReject)
    .then(respond.success)
    .catch(logging.logAndReject)
    .catch(respond.failed);
};
