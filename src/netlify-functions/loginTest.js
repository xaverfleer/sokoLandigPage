/* eslint-disable import/no-extraneous-dependencies */
const test = require("tape");
const login = require("./login.js");

test("helpers.eventToEmail", (assert) => {
  const target = login.__testonly__.helpers.eventToEmail;

  test("returns the email for a sample input", (a) => {
    const sampleInput = {
      body: "%7b%22email%22%3a%22hallo%40velo%2ecom%22%7d",
    };
    a.strictEqual(target(sampleInput), "hallo@velo.com");
    a.end();
  });

  assert.end();
});
