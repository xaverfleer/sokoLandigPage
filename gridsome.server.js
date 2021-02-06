const legacyConfig = require("./webpack.common.js");

module.exports = function(api) {
  api.configureWebpack(legacyConfig);
};
