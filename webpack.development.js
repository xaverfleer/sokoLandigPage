const commonConfig = require("./webpack.common");

const devConfig = { ...commonConfig, mode: "development" };

module.exports = devConfig;
