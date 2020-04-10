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
  console.log("starting");

  var decoded = decodeURIComponent(event.body);
  console.log(`decoded: ${decoded}`);

  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "xaver.fleer+sokokurs@gmail.com",
    from: "noreply@so-kommunizieren.com",
    subject: "Subscription for 2020-04-02",
    text: decoded
  };
  console.log("sending email");
  sgMail
    .send(msg)
    .then(function() {
      callback(null, {
        statusCode: 200,
        body: "Somebody subscribed."
      });
      console.log("success");
    })
    .catch(function(e) {
      callback(e, {
        statusCode: 500,
        body: `failed: + ${e}`
      });
      console.log("failure");
    });
};
