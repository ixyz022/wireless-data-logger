module.exports = {
  env: {
    es2021: true,
    "react-native/react-native": true, // Específico de React Native
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all", // Reglas específicas para React Native
    "prettier", // Integra Prettier
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Soporte para JSX
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-native", // Plugin para React Native
    "prettier", // Integra Prettier como plugin
  ],
  rules: {
    "prettier/prettier": "error", // Marca los errores de formato de Prettier
  },
  settings: {
    react: {
      version: "detect", // Detecta automáticamente la versión de React
    },
  },
};
