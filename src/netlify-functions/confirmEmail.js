const faunadb = require("faunadb");
const logging = require("./private/logging");
const responding = require("./private/responding");

const db = {
  fetchUser(confirmationCode) {
    const q = faunadb.query;
    const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
    const userPromise = client.query(
      q.Get(q.Match(q.Index("userByConfirmationCode"), confirmationCode))
    );
    return userPromise;
  },
  updateUser(ref, paramObject) {
    const q = faunadb.query;
    const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
    return client.query(q.Update(ref, paramObject));
  },
};

exports.handler = function register(event, context, callback) {
  logging.logStart("Start confirmEmail");
  const respond = responding.responseHandlers(callback);

  const { confirmationCode } = event.queryStringParameters;
  const decoded = decodeURIComponent(confirmationCode);

  logging.log(`Requesting user with confirmationCode: ${decoded}`);
  db.fetchUser(decoded)
    .catch(logging.logAndReject)
    .then((fetched) => {
      const dbUser = fetched.data;
      logging.log(`Retrieved user with email: ${dbUser.email}`);

      const paramObject = {
        data: { confirmationCode: null, isConfirmed: true },
      };
      return db.updateUser(fetched.ref, paramObject);
    })
    .catch(logging.logAndReject)
    .then(respond.success)
    .catch(logging.logAndReject)
    .catch(respond.failed);
};
