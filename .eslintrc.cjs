const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
)

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'prettier',
    'eslint-plugin-prettier'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: [
    'eslint-plugin-prettier',
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  }
}
