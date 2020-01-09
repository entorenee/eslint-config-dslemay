module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    './possible-errors.js',
    './best-practices.js',
    './stylistic.js',
    './es6.js',
    './import.js',
    // Remaining rules included to catch defunct rule errors
    './jest.js',
    './jsx-a11y.js',
    './react.js',
  ],
};
