module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  extends: [
          'plugin:@typescript-eslint/recommended',
          'plugin:prettier/recommended',
        ],
        plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "prettier/prettier": [
      "warn",
      {
        "printWidth": 180,
        "trailingComma": "all",
        "tabWidth": 2,
        "semi": true,
        "singleQuote": true,
        "bracketSpacing": true,
        "arrowParens": "always",
        "endOfLine": "auto"
      }
    ],
  },
};
