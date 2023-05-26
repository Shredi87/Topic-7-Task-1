module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "overrides": [
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2, { "ignoreComments": true }],
    "quotes": ["error", "single", { "avoidEscape": true }, { "allowTemplateLiterals": true }],
    "semi": ["error", "always", { "omitLastInOneLineBlock": true }, { "omitLastInOneLineClassBody": true }],
    "no-empty": "error",
    "no-cond-assign": "error",
    "for-direction": "error",  
  }
}
