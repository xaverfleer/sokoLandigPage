const crypting = require("./private/crypting");
const db = require("./private/db");
const logging = require("./private/logging");
const mailing = require("./private/mailing");
const responding = require("./private/responding");

const helpers = {
  composeEmail(email, id) {
    const message = {
      to: email,
      subject: "Passwort zurücksetzen.",
      text: `Klicke auf den Link um dein zurückzusetzen: https://so-kommunizieren.ch/kurs?passwordChangeCode=${encodeURIComponent(
        id
      )}#/enter-new-password/\n\nFalls du keinen Link angefordert hast, kannst du diese E-Mail ignorieren.`,
    };
    return message;
  },
};

exports.handler = function register(event, context, callback = () => {}) {
  logging.logStart("Start reset password");
  const respond = responding.responseHandlers(callback);

  const { email } = JSON.parse(event.body);

  logging.log(`Fetch user with email: ${email}`);
  db.get
    .userByEmail(email)
    .then((userParams) => {
      logging.log(`Fetched user with email: ${userParams.data.email}.`);
      logging.log(`Create passwordResetSession for this user.`);
      return db.do.createPasswordResetSession({
        data: { email: userParams.data.email, id: crypting.randomString() },
      });
    })
    .then((resetSession) => {
      logging.log(`Created︎ passwordResetSession.\nCompose email.`);
      const message = helpers.composeEmail(
        resetSession.data.email,
        resetSession.data.id
      );
      logging.log(`Send email.`);
      return mailing.sendEmail(message);
    })
    .then(() => "success")
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};
