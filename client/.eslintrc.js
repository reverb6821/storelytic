module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: ["plugin:react/recommended", "airbnb"],
    overrides: [],
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      semi: ["error", "always"],
      "react/react-in-jsx-scope": "off",
    },
  };