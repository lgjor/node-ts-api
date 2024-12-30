const { ESLint } = require("eslint");

module.exports = [
  {
    files: ["src/**/*.ts", "test/**/*.ts"],
    ignores: ["node_modules/**"],
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      ...require("@typescript-eslint/eslint-plugin").configs.recommended.rules,
    },
  },
];