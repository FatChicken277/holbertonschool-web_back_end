module.exports = {
  env: {
    browser: false,
    es6: true,
    mocha: true,
  },
  extends: ['airbnb-base', 'plugin:mocha/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['mocha'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    },
    {
      files: ['*test.js'],
      rules: {
        'func-names': 'off',
        'prefer-arrow-callback': 'off',
      },
    },
  ],
};