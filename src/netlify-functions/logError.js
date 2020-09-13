const logging = require("./private/logging");
const mailing = require("./private/mailing");
const responding = require("./private/responding");

const helpers = {
  composeEmail(error) {
    return {
      to: "xaver.fleer+soko-error@gmail.com",
      subject: "Fehler auf so-kommunizieren",
      text: error,
    };
  },
};

exports.handler = function register(event, context, callback = () => {}) {
  logging.logStart("Start logError");
  const respond = responding.responseHandlers(callback);

  mailing
    .sendEmail(helpers.composeEmail(event.body))
    .then(() => "success")
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};
