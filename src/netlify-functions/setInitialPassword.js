const crypting = require("./private/crypting");
const db = require("./private/db");
const logging = require("./private/logging");
const responding = require("./private/responding");

exports.handler = function register(event, context, callback = () => {}) {
  logging.logStart("Start set initial password");
  const respond = responding.responseHandlers(callback);

  const { password, pwCode } = JSON.parse(event.body);

  logging.log(`Fetch user by pwCode: ${pwCode}`);
  db.get
    .userByPwCode(pwCode)
    .then((fetched) => {
      logging.log(`Fetched user with email: ${fetched.data.email}.`);
      const salt = crypting.randomString();
      const hash = crypting.hash(password + salt);

      logging.log(`Update user with email: ${fetched.data.email}.`);
      return db.do.updateDocument(fetched.ref, {
        data: { hash, salt, isConfirmed: true, pwCode: null },
      });
    })
    .then((fetched) => {
      logging.log(`Updated user with email ${fetched.data.user}`);
      return "success";
    })
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};
