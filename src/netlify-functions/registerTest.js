/* eslint-disable import/no-extraneous-dependencies */
const test = require("tape");
const register = require("./register.js");

test("helpers.composeUser", (assert) => {
  const target = register.__testonly__.helpers.composeUser;
  const sampleInputs = ["dummy@company.com", "notSecure"];

  test("is a function", (a) => {
    a.strictEqual(typeof target, "function");
    a.end();
  });

  test("Returns an object", (a) => {
    a.strictEqual(typeof target(...sampleInputs), "object");
    a.end();
  });

  test("Returned object contaoins email, hash and salt", (a) => {
    const returned = target(...sampleInputs);
    a.strictEqual(returned.data.email, "dummy@company.com");
    a.strictEqual(typeof returned.data.hash, "string");
    a.strictEqual(typeof returned.data.salt, "string");
    a.end();
  });
  assert.end();
});
