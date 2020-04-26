const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    kurs: "./src/kurs.js",
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
};
