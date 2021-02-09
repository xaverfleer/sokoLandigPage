const logging = require("./private/logging");
const mailing = require("./private/mailing");
const responding = require("./private/responding");

exports.handler = function absenden(event, context, callback) {
  logging.logStart("Start sendMessage");
  const respond = responding.responseHandlers(callback);

  logging.log(`event.body: ${event.body}`);

  const msg = {
    to: "xaver.fleer+soko-message@gmail.com",
    subject: "Nachricht von Website gesendet",
    text: event.body,
  };
  logging.log("sending email");

  mailing
    .sendEmail(msg)
    .then(() => "success")
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};
