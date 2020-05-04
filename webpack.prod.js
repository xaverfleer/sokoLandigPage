/* eslint-disable import/no-extraneous-dependencies */
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const commonConfig = require("./webpack.common");

const devConfig = {
  ...commonConfig,
  mode: "production",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};

module.exports = devConfig;
