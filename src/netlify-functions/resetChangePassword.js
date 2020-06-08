const crypting = require("./private/crypting");
const db = require("./private/db");
const logging = require("./private/logging");
const responding = require("./private/responding");

exports.handler = function register(event, context, callback = () => {}) {
  logging.logStart("Start reset change password");
  const respond = responding.responseHandlers(callback);

  const { password, passwordChangeCode } = JSON.parse(event.body);

  logging.log(`Fetch passwordResetSession`);
  db.get
    .passwordResetSessionById(passwordChangeCode)
    .then((fetched) => {
      logging.log(`Fetched passwordResetSession email: ${fetched.data.email}.`);
      logging.log(
        `Delete passwordResetSession and fetch user with email: ${fetched.data.email}.`
      );
      return Promise.all([
        db.get.userByEmail(fetched.data.email),
        db.do.deleteDocument(fetched.ref),
      ]);
    })
    .then((result) => {
      const fetchedUser = result[0];
      logging.log(
        `Deleted passwordResetSession and fetched user with email: ${fetchedUser.data.email}.`
      );
      const newHash = crypting.hash(password + fetchedUser.data.salt);

      logging.log(`Update user hash`);
      db.do.updateDocument(fetchedUser.ref, { hash: newHash });
    })
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};
