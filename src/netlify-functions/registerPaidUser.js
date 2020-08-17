const crypting = require("./private/crypting");
const db = require("./private/db");
const logging = require("./private/logging");
const mailing = require("./private/mailing");
const responding = require("./private/responding");

const helpers = {
  composeUser(email, name, promoCode) {
    return {
      data: {
        email,
        name,
        isPaidAccount: true,
        promoCode,
        pwCode: crypting.randomString(),
      },
    };
  },

  composeEmail(email, pwCode) {
    const message = {
      to: email,
      subject: "Passwort definieren und loslegen",
      text: `Vielen Dank hast du so* kommunizieren mit meinem Baby gebucht.\n\nKlicke auf den Link um dein Passwort zu definieren: https://so-kommunizieren.ch/kurs?pwCode=${encodeURIComponent(
        pwCode
      )}#/set-initial-password/`,
    };
    return { message };
  },
};

exports.handler = function register(event, context, callback = () => {}) {
  logging.logStart("Start register paid user");
  const respond = responding.responseHandlers(callback);

  const { email, name, promoCode } = JSON.parse(event.body);

  const newUserParams = helpers.composeUser(email, name, promoCode);

  logging.log(`Check if user exists. User email: ${email}`);
  db.get
    .doesUserExist(email)
    .then((doesUserExist) => {
      logging.log(`User${doesUserExist ? " DOES" : " does NOT"} exist.`);
      return doesUserExist ? Promise.reject() : newUserParams;
    })
    .then(() => {
      logging.log(`Create user with email ${newUserParams.data.email}.`);
      return db.do.createUser(newUserParams);
    })
    .then((response) => {
      logging.log(`Created︎ user.\nCompose email.`);
      return helpers.composeEmail(response.data.email, response.data.pwCode);
    })
    .then(({ message }) => {
      logging.log(`Send email.`);
      return mailing.sendEmail(message);
    })
    .then(() => "success")
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};
