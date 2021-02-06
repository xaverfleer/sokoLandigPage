/* eslint-disable import/no-extraneous-dependencies */
const test = require("tape");
const login = require("./login.js");

test("helpers.eventToEmail", (assert) => {
  const target = login.__testonly__.helpers.parseEventBody;

  test("returns the email for a sample input", (a) => {
    const sampleInput = encodeURIComponent(
      JSON.stringify({ email: "hallo@velo.com", password: "123unsafe" })
    );
    a.strictEqual(target(sampleInput).email, "hallo@velo.com");
    a.end();
  });

  assert.end();
});
