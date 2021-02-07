/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");

module.exports = {
  entry: {
    index: "./src-legacy/index.js",
    // kurs: "./src-legacy/kurs.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
