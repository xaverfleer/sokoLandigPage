/* eslint-disable import/no-extraneous-dependencies */
const test = require("tape");
const crypting = require("./crypting.js");

test("crypting", (assert) => {
  test("hash", (assert2) => {
    const target = crypting.hash;
    const input = "some input";
    test("Returns a string", (a) => {
      a.strictEqual(typeof target(input), "string");
      a.end();
    });
    test("Returned lenght is greater than 10", (a) => {
      a.strictEqual(target(input).length > 10, true);
      a.end();
    });
    assert2.end();
  });
  test("randomString", (assert2) => {
    const target = crypting.randomString;
    test("Returns a string", (a) => {
      a.strictEqual(typeof target(), "string");
      a.end();
    });
    test("Returned lenght is greater than 10", (a) => {
      a.strictEqual(target().length > 10, true);
      a.end();
    });
    assert2.end();
  });
  assert.end();
});
