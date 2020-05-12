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
    a.strictEqual(target(...sampleInputs).email, "dummy@company.com");
    a.strictEqual(typeof target(...sampleInputs).hash, "string");
    a.strictEqual(typeof target(...sampleInputs).salt, "string");
    a.end();
  });
  assert.end();
});

const raw = { email: "hallo@velo.com", password: "notSafe" };
const stringified = JSON.stringify(raw);
const encoded = encodeURIComponent(stringified);
const input = { body: encoded };

register.handler(input);
