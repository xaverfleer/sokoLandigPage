const path = require("path");

const devConfig = {
  devServer: {
    contentBase: path.join(__dirname, "./dist/"),
    proxy: {
      "/.netlify": {
        target: "http://localhost:9000",
        pathRewrite: { "^/.netlify/functions": "" },
      },
    },
  },
  mode: "development",
};

module.exports = devConfig;
