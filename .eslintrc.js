module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      "plugin:vue/vue3-recommended",
      "eslint:recommended",
      "@vue/typescript/recommended",
      "prettier",
    ],
    parserOptions: {
      ecmaVersion: 2021,
    },
    plugins: [],
    rules: {
      "no-var": "error",
      "prefer-const": [
        "error",
        {
          destructuring: "any",
          ignoreReadBeforeAssign: false,
        },
      ],
    },
  };
  