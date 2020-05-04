const commonConfig = require("./webpack.common");

const devConfig = { ...commonConfig, mode: "production" };

module.exports = devConfig;
