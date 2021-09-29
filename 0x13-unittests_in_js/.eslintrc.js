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
