module.exports = {
  extends: ["airbnb-base", "prettier"],
  ignorePatterns: ["dist/", "node_modules/", "src/assets/"],
  rules: {
    "no-underscore-dangle": ["error", { allow: ["__testonly__"] }],
  },
};
