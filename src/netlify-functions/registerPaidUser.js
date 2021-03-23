const crypting = require("./private/crypting");
const db = require("./private/db");
const logging = require("./private/logging");
const mailing = require("./private/mailing");
const responding = require("./private/responding");

const helpers = {
  composeUser(personalData) {
    const pwCode = crypting.randomString();
    return {
      data: { ...personalData, isPaidAccount: true, pwCode },
    };
  },

  composeUpgradedEmail(email) {
    return {
      to: email,
      bcc: "eva.fleer@gmail.com",
      subject: "Zugang freigeschaltet.",
      text: `Vielen Dank hast du so* kommunizieren mit meinem Baby gebucht.\n\nDu hast nun vollen Zugriff auf alle Inhalte.`,
    };
  },

  composePwEmail(email, pwCode) {
    return {
      to: email,
      bcc: "eva.fleer@gmail.com",
      subject: "Passwort definieren und loslegen",
      text: `Vielen Dank hast du so* kommunizieren mit meinem Baby gebucht.\n\nKlicke auf den Link um dein Passwort zu definieren: https://so-kommunizieren.ch/passwort-definieren/?pwCode=${encodeURIComponent(
        pwCode
      )}`,
    };
  },
};

exports.handler = function register(event, context, callback = () => {}) {
  logging.logStart("Start register paid user");
  const respond = responding.responseHandlers(callback);

  const {
    address,
    city,
    email,
    name,
    offerName,
    paymentMethod,
    phone,
    promoCode,
  } = JSON.parse(event.body);

  const newUserParams = helpers.composeUser({
    address,
    city,
    email,
    name,
    offerName,
    paymentMethod,
    phone,
    promoCode,
  });

  logging.log(`Check if user exists. User email: ${email}`);
  db.get
    .doesUserExist(email)
    .then((doesUserExist) => {
      logging.log(`User${doesUserExist ? " DOES" : " does NOT"} exist.`);
      if (doesUserExist) {
        logging.log(`Get user with email ${email}.`);
        return db.get
          .userByEmail(email)
          .then((fetched) => {
            logging.log(`Upgrade user with email${email}.`);
            const paramsObject = { data: { isPaidAccount: true, promoCode } };
            return db.do.updateDocument(fetched.ref, paramsObject);
          })
          .then((response) => {
            logging.log(`Compose email.`);
            return helpers.composeUpgradedEmail(response.data.email);
          })
          .then((message) => {
            logging.log(`Send email.`);
            return mailing.sendEmail(message);
          })
          .then(() => "Account upgraded");
      }
      logging.log(`Create user with email ${newUserParams.data.email}.`);
      return db.do
        .createUser(newUserParams)
        .then((response) => {
          logging.log(`Created︎ user.\nCompose email.`);
          return helpers.composePwEmail(
            response.data.email,
            response.data.pwCode
          );
        })
        .then((message) => {
          logging.log(`Send email.`);
          return mailing.sendEmail(message);
        })
        .then(() => "Link sent");
    })
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};
