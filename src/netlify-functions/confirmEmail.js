/* eslint-disable no-console */
const faunadb = require("faunadb");

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

function responseHandlers(callback) {
  return {
    failed(e) {
      console.log("End confirm email wit failure");
      callback(e, {
        statusCode: 500,
        body: `Failed with error: + ${e.message}`,
      });
    },
    success() {
      console.log("End confirm email successfully");
      callback(null, {
        statusCode: 200,
        body: "ok",
      });
    },
  };
}

const helpers = {
  logAndReject(error) {
    console.log(`Error: ${error}`);
    return Promise.reject(new Error("Failed"));
  },
};

exports.handler = function register(event, context, callback) {
  console.log("Start confirm email");

  const respond = responseHandlers(callback);
  const { confirmationCode } = event.queryStringParameters;
  const decoded = decodeURIComponent(confirmationCode);

  console.log(`Requesting user with confirmationCode: ${decoded}`);
  db.fetchUser(decoded)
    .catch(helpers.logAndReject)
    .then((fetched) => {
      const dbUser = fetched.data;
      console.log(`Retrieved user with email: ${dbUser.email}`);

      const paramObject = {
        data: { confirmationCode: null, isConfirmed: true },
      };
      return db.updateUser(fetched.ref, paramObject);
    })
    .catch(helpers.logAndReject)
    .then(respond.success)
    .catch((e) => respond.failed(e));
};
