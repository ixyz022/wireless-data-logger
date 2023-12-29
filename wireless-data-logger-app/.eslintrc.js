module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["@react-native-community", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 4],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
  },
};
