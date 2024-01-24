/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:effector/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["@typescript-eslint", "simple-import-sort", "import", "unused-imports", "effector", "prettier"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        singleQuote: false,
        semi: true,
        tabWidth: 2,
        endOfLine: "auto",
        trailingComma: "es5",
        arrowParens: "avoid",
        printWidth: 120,
        singleAttributePerLine: true,
      },
    ],
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx", "*.vue"],
      rules: {
        "simple-import-sort/imports": [
          "warn",
          {
            groups: [
              ["^vue", "^@?\\w"],
              ["^(@|components)(/.*|$)"],
              ["^\\u0000"],
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              ["^.+\\.?(css)$", "^.+\\.?(scss)$"],
            ],
          },
        ],
      },
    },
  ],
};
