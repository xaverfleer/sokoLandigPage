const path = require("path");
const commonConfig = require("./webpack.common");

const devConfig = {
  ...commonConfig,
  devtool: "eval-cheap-source-map",
  devServer: { contentBase: path.join(__dirname, "./dist/") },
  mode: "development",
};

module.exports = devConfig;
