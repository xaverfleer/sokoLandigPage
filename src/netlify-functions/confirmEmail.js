const db = require("./private/db");
const logging = require("./private/logging");
const responding = require("./private/responding");

exports.handler = function register(event, context, callback) {
  logging.logStart("Start confirmEmail");
  const respond = responding.responseHandlers(callback);

  const { confirmationCode } = event.queryStringParameters;
  const decoded = decodeURIComponent(confirmationCode);

  logging.log(`Requesting user with confirmationCode: ${decoded}`);
  db.userByConfirmationCode(decoded)
    .catch(logging.logAndReject)
    .then((fetchedUser) => {
      logging.log(`Retrieved user with email: ${fetchedUser.data.email}`);

      const paramObject = {
        data: { confirmationCode: null, isConfirmed: true },
      };
      return db.updateDocument(fetchedUser.ref, paramObject);
    })
    .catch(logging.logAndReject)
    .then(() => "success")
    .then(respond.success)
    .catch(logging.logAndReject)
    .catch(respond.failed);
};
