# ESLint Config Dslemay

This project contains an extandable ESLint configuration that I use on my projects. It manages the dependencies and configuration of various plugins which can then be extended into the source project.

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
