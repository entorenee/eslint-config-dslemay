module.exports = {
  plugins: ['import'],
  rules: {
    'import/default': 'error',
    'import/dynamic-import-chunkname': 'off',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-commonjs': 'off',
    'import/no-cycle': 'error',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'off',

    // Favor import variant which supports Flow type imports
    'no-duplicate-imports': 'off',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          '**/jest/**', // contain jest config and setup
          '**/jest.config.js', //jest pattern
          '**/*.test.{js.jsx}', // test files
          '**/stories/**', // storybook pattern
          '**/*.stories.{js,jsx}', // storybook pattern
          '**/webpack.config.js', // webpack pattern
          '**/webpack.config.*.js', // webpack pattern
        ],
        optionalDependencies: false, // Probably shouldn't be optional then
      },
    ],
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/no-unused-modules': 'off',
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          ['external', 'internal'],
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off',
  },
};
