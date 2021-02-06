const crypto = require("crypto");

const fns = {
  hash(input) {
    return crypto
      .createHash("md5")
      .update(input)
      .digest("hex");
  },
  randomString() {
    return crypto.randomBytes(16).toString("base64");
  },
  verifyPassword(password, salt, expectedHash) {
    return fns.hash(password + salt) === expectedHash;
  },
};

module.exports = fns;
