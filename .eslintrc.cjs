/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-mixed-spaces-and-tabs': 0,
    'vue/multi-word-component-names': 0,
  },
};
