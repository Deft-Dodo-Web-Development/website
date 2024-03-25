/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@deft-dodo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: ["**/*.js"],
};
