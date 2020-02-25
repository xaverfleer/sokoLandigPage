// Event format [src](https://docs.netlify.com/functions/build-with-javascript/#format)
// {
//     "path": "Path parameter",
//     "httpMethod": "Incoming request's method name"
//     "headers": {Incoming request headers}
//     "queryStringParameters": {query string parameters }
//     "body": "A JSON string of the request payload."
//     "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// }
exports.handler = function(event, context, callback) {
  console.log("absenden.js called");
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "xaver.fleer+test@gmail.com",
    from: "noreply@so-kommunizieren.com",
    subject: "Subscription for 2020-04-02",
    text: "wip",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>"
  };
  console.log("success");
  sgMail.send(msg);
  callback(null, {
    statusCode: 200,
    body: "Somebody subscribed for 2020-04-02."
  });
};
