# ESLint Config Dslemay

[![CircleCI](https://circleci.com/gh/dslemay/eslint-config-dslemay.svg?style=svg)](https://circleci.com/gh/dslemay/eslint-config-dslemay)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

I rely on ESLint heavily for my projects, but was annoyed with managing the config and dependencies across many different repositories. This project contains an extendable ESLint configuration and is the base for my projects. It manages the dependencies and configuration of various plugins which can then be extended into the source project. This reduces the overhead and duplication of managing configuration across many projects. It also reduces the number of dependencies each project must directly install and manage.

## Requirements and Installation

This configuration requires ESLint `>= 5.0.0`. To install and use the configuration follow the steps below.

**Install**

```shell
yarn add --dev eslint eslint-config-dslemay
```

```shell
npm install -D eslint eslint-config-dslemay
```

**Configure**

```javascript
// .eslintrc.js
module.exports = {
  extends: ['dslemay'],
  rules: {
    // Override any rules
  },
};
```

This root extension contains base configuration used for all projects. Parts of the base configuration can be extended individually, if you only want to use some of the rules. This is an edge case and should be approached with caution to avoid gaps in rule coverage. The rules object in your local ESLint config can be used to override any rule definitions which do not work for your project.

- **Possible Errors:** Sets ESLint core [possible errors rules](https://eslint.org/docs/rules/#possible-errors). These rule definitions can be extended as `dslemay/possible-errors`.
- **Best Practices:** Sets ESLint core [best practices rules](https://eslint.org/docs/rules/#best-practices). These rule definitions can be extended as `dslemay/best-practices`
- **Stylistic:** Extends [Prettier plugin](https://github.com/prettier/eslint-config-prettier) for code formatting and sets other ESLint core [stylistic rules](https://github.com/prettier/eslint-config-prettier). These rule definitions can be extended as `dslemay/stylistic`. For more information about using Prettier with this config read [Integration with Prettier](#integration-with-prettier)
- **ES6:** Adds [rules](https://eslint.org/docs/rules/#ecmascript-6) related to ES6 and beyond development including setting configuration options and using babel-eslint as the parser. These rule definitions and config can be extended as `dslemay/es6`
- **Import:** Adds the [ESLint import plugin](https://github.com/benmosher/eslint-plugin-import) and sets the assocated rules. This helps to catch poor import paths, grouping of imports, and more. These rule definitions can be extended as `dslemay/import`

All of the related plugins are installed as dependencies of this package and should not require any additional installation or management in your package.

## Additional Plugins/rules available

This package also provides configuration for other commonly used plugins and their associate rules. These are not included in the base configuration by default and can be added to the `extends` array on an as needed basis.

**Note:** Occasionally, the corresponding ESLint plugin must be installed as a dependency in your project. I'm uncertain why this arises in certain cases and may be a result of multiple project dependencies exposing variosu versions of the plugin. If you encounter errors about rules not being found, try installing the corresponding plugin explicitly.

- **Jest:** Configures ESLint to recognize Jest globals and use the [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest) with accompanying rules. To use this ruleset, add `'dslemay/jest'` to the `extends` array in your ESLint config.
- **React:** Configures ESLint for React. Includes rules from [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks). To use this ruleset, add `dslemay/react` to the `extends` array in your ESLint config.
- **JSX-A11y:** Configures ESLint to check JSX for accessibility issues. Includes the rules from [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y). To use this ruleset, add `dslemay/jsx-a11y` to the `extends` array in your ESLint config.
- **TypeScript:** Configures ESLint to work with TypeScript including disabling some base ESLint rules which do not interface well with TypeScript files. Includes rules from [@typescript-eslint plugin and parser](https://github.com/typescript-eslint/typescript-eslint). If your project is pure TypeScript, add `dslemay/typescript-pure` to the `extends` array in your ESLint config. If your project is a mix of TypeScript and JavaScript, use `dslemay/typescript` instead. The only difference is that the latter applies the TypeScript rules as an override to `.tsx?` files rather than globally.

## Integration with Prettier

Prettier provides consistent code format and can reduce common stylistic bike-shedding. This configuration does not install Prettier or provide a Prettier configuration file. Some additional configuration is required in your project to use Prettier.

**Install Prettier:**

```shell
yarn add --dev prettier
```

```shell
npm install -D prettier
```

If you would like to have Prettier errors show up as ESLint errors and be resolved with `eslint --fix`, install and use the [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier). Otherwise, files can be formatted on save in most editors or through a separate Prettier script.

If you would like to override any of the Prettier options create a `.prettierrc` file with the available [configuration options](https://prettier.io/docs/en/configuration.html).
