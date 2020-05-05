const path = require("path");
const commonConfig = require("./webpack.common");

const devConfig = {
  ...commonConfig,
  devtool: "eval-cheap-source-map",
  devServer: {
    contentBase: path.join(__dirname, "./dist/"),
    proxy: {
      "/kurs": {
        target: "http://localhost:8080/kurs.html",
        pathRewrite: { "^/kurs$": "" },
      },
    },
  },
  mode: "development",
};

module.exports = devConfig;
