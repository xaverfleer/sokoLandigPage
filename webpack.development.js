const commonConfig = require("./webpack.common");

const devConfig = {
  ...commonConfig,
  devtool: "eval-cheap-source-map",
  mode: "development",
};

module.exports = devConfig;
