const faunadb = require("faunadb");

const q = faunadb.query;
function getClient() {
  return new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
}

const fns = {
  do: {
    createDocument(collection, paramObject) {
      const client = getClient();
      return client.query(q.Create(q.Collection(collection), paramObject));
    },
    createPasswordResetSession(paramObject) {
      return fns.do.createDocument("passwordResetSession", paramObject);
    },
    createUser(paramObject) {
      return fns.do.createDocument("users", paramObject);
    },
    createSession(paramObject) {
      return fns.do.createDocument("sessions", paramObject);
    },
    deleteDocument(ref) {
      const client = getClient();
      return client.query(q.Delete(ref));
    },
    updateDocument(ref, paramObject) {
      const paramObjWithTimestamp = paramObject || {};
      paramObjWithTimestamp.data = paramObjWithTimestamp.data || {};
      paramObjWithTimestamp.data.timestamp = new Date().toISOString();

      const client = getClient();
      return client.query(q.Update(ref, paramObjWithTimestamp));
    },
  },
  get: {
    doesUserExist(email) {
      return fns.get
        .userByEmail(email)
        .then(() => true)
        .catch(() => false);
    },
    doesSessionExist(email) {
      return fns.get
        .sessionByEmail(email)
        .then(() => true)
        .catch(() => false);
    },
    discount(code) {
      const client = getClient();
      return client.query(q.Get(q.Match(q.Index("discountByCode"), code)));
    },
    userByConfirmationCode(confirmationCode) {
      const client = getClient();
      return client.query(
        q.Get(q.Match(q.Index("userByConfirmationCode"), confirmationCode))
      );
    },
    userByPwCode(code) {
      const client = getClient();
      return client.query(q.Get(q.Match(q.Index("userByPwCode"), code)));
    },
    userByEmail(email) {
      const client = getClient();
      return client.query(q.Get(q.Match(q.Index("userByEmail"), email)));
    },
    sessionByEmail(email) {
      const client = getClient();
      return client.query(q.Get(q.Match(q.Index("sessionByEmail"), email)));
    },
    sessionBySessionId(sessionId) {
      const client = getClient();
      return client.query(
        q.Get(q.Match(q.Index("sessionBySessionId"), sessionId))
      );
    },
    passwordResetSessionById(id) {
      const client = getClient();
      return client.query(
        q.Get(q.Match(q.Index("passwordResetSessionById"), id))
      );
    },
  },
};

module.exports = fns;
