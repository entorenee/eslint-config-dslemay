module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['prettier'],
  rules: {
    'always-bracket-new-line': ['error', 'consistent'],
    camelcase: ['error', { properties: 'always', ignoreDestructuring: false }],
    'capitalized-comments': 'off',
    'consistent-this': 'off',
    'func-name-matching': [
      'error',
      'always',
      { considerPropertyDescriptor: true, includeCommonJSModuleExports: false },
    ],
    'func-names': ['error', 'always'],
    'func-style': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'line-comment-position': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],
    'max-depth': ['error', 4],
    'max-length': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'max-lines': [
      'error',
      {
        max: 500,
        skipBlankLines: false,
        skipComments: false,
      },
    ],
    'max-lines-per-function': ['error', 200],
    'max-nested-callbacks': ['error', 10],
    'max-params': ['error', 6],
    'max-statements': 'off',
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-comment-style': ['error', 'starred-block'],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        properties: true,
      },
    ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',

    // Allows tabs to be used with Prettier if desired
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'one-var': ['error', { initialized: 'never', uninitialized: 'always' }],
    'operator-assignment': ['error', 'always'],
    'padding-line-between-statements': 'off',
    'prefer-object-spread': 'error',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': 'off',
  },
};