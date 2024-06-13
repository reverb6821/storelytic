import globals from "globals";
import importPlugin from 'eslint-plugin-import';
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
    },
    plugins: {
      import: importPlugin
    },
    rules: {
      // 'allowConstantExport':  ["error", true],
      // "import/no-unresolved": "error",
      "import/order": ["error", {
        "groups": [
          "builtin",
          "external",
          "internal",
          ['sibling', 'parent'],
          "index",
          'unknown',
        ],
        'newlines-between': 'always',
        'alphabetize': {
          /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
          'order': 'desc',
          /* ignore case. Options: [true, false] */
          'caseInsensitive': true,
        },
      }],
      "no-unused-vars": "error",
      "prefer-const": ["error", { "ignoreReadBeforeAssign": true }],
      'no-var': 'warn',
      'no-unusued-expression': 0,
      'object-shorthand': 'warn',
      'quote-props': ['warn', 'as-needed'],
      "quotes": [2, "single", { "avoidEscape": true }],
      'arrow-body-style': [2, 'as-needed'],
      'implicit-arrow-linebreak': 0,
      'comma-dangle': 0,
      'object-curly-newline': [0,{ 'multiline': true, 'minProperties': 3}],
      'no-console': 0,
      'indent': ['error', 2]
    },
    ignores: [
      // Files to ignore
      "node_modules/**", // Entire "node_modules" directory
      "dist/**/*.js", // All JavaScript files in the "dist" directory
      "eslint.config.mjs", // Ignore your ESLint configuration file (optional)
      "**/__tests__/**", // All files within directories named "__tests__"
      "commitlint.config.cjs",
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];