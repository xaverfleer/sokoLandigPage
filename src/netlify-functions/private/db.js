const faunadb = require("faunadb");

const q = faunadb.query;
function getClient() {
  return new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
}

module.exports = {
  createUser(paramObject) {
    const client = getClient();
    return client.query(q.Create(q.Collection("users"), paramObject));
  },
  createSession(paramObject) {
    const client = getClient();
    return client.query(q.Create(q.Collection("sessions"), paramObject));
  },
  doesUserExist(email) {
    return this.userByEmail(email)
      .then(() => true)
      .catch(() => false);
  },
  userByConfirmationCode(confirmationCode) {
    const client = getClient();
    return client.query(
      q.Get(q.Match(q.Index("userByConfirmationCode"), confirmationCode))
    );
  },
  userByEmail(email) {
    const client = getClient();
    return client.query(q.Get(q.Match(q.Index("userByEmail"), email)));
  },
  updateDocument(ref, paramObject) {
    const paramObjWithTimestamp = paramObject || {};
    paramObjWithTimestamp.data = paramObjWithTimestamp.data || {};
    paramObjWithTimestamp.data.timestamp = new Date().toISOString();

    const client = getClient();
    return client.query(q.Update(ref, paramObjWithTimestamp));
  },
};
