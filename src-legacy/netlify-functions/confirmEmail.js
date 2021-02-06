const db = require("./private/db");
const logging = require("./private/logging");
const responding = require("./private/responding");

exports.handler = function register(event, context, callback) {
  logging.logStart("Start confirmEmail");
  const respond = responding.responseHandlers(callback);

  const { confirmationCode } = event.queryStringParameters;
  const decoded = decodeURIComponent(confirmationCode);

  logging.log(`Requesting user with confirmationCode: ${decoded}`);
  db.get
    .userByConfirmationCode(decoded)
    .then((fetchedUser) => {
      logging.log(`Retrieved user with email: ${fetchedUser.data.email}`);

      const paramObject = {
        data: { confirmationCode: null, isConfirmed: true },
      };
      return db.do.updateDocument(fetchedUser.ref, paramObject);
    })
    .then(() => "success")
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};
