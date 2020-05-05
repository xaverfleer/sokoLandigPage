/* eslint-disable import/no-extraneous-dependencies */
const TerserPlugin = require("terser-webpack-plugin");
const commonConfig = require("./webpack.common");

const devConfig = {
  ...commonConfig,
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

module.exports = devConfig;
