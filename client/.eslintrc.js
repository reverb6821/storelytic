const fs = require('fs');
const path = require('path');
const { off } = require('process');

const prettierOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        ecmaVersion: 12,
        sourceType: 'module',
    },
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['.eslintrc.js'],
    plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'import', 'prettier'],
    rules: {
        'prettier/prettier': ['error', prettierOptions],
        'react/react-in-jsx-scope': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/prop-types': [2, { ignore: ['children'] }],
    },
};
