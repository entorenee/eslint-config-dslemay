module.exports = {
  env: {
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ['jest'],
  rules: {
    'jest/consistent-test-it': ['error'],
    'jest/expect-expect': 'off',
    'jest/lowercase-name': 'off',
    'jest/no-alias-methods': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-empty-title': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': 'off',
    'jest/no-identical-title': 'error',
    'jest/no-jasmine-globals': 'warn',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/no-test-callback': 'off',
    'jest/no-test-prefixes': 'off',
    'jest/no-test-return-statement': 'warn',
    'jest/no-truthy-falsy': 'off',
    'jest/prefer-called-with': 'error',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-spy-on': 'off',
    'jest/prefer-strict-equal': 'off',
    'jest/prefer-to-be-null': 'off',
    'jest/prefer-to-be-undefined': 'off',
    'jest/prefer-to-contain': 'warn',
    'jest/prefer-to-have-length': 'warn',
    'jest/prefer-todo': 'warn',
    'jest/require-tothrow-message': 'off',
    'jest/valid-describe': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
  },
};
