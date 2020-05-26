const faunadb = require("faunadb");

const q = faunadb.query;
function getClient() {
  return new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
}

module.exports = {
  userByConfirmationCode(confirmationCode) {
    const client = getClient();
    return client.query(
      q.Get(q.Match(q.Index("userByConfirmationCode"), confirmationCode))
    );
  },
  updateDocument(ref, paramObject) {
    const client = getClient();
    return client.query(q.Update(ref, paramObject));
  },
};
