const path = require("path");
const commonConfig = require("./webpack.common");

const devConfig = {
  ...commonConfig,
  devtool: "eval-cheap-source-map",
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
