/* eslint-disable no-console */
module.exports = {
  logAndReject(error) {
    console.log(`Error: ${error && error.message}`);
    return Promise.reject(new Error("Failed"));
  },

  log(message) {
    console.log(message);
  },
};
