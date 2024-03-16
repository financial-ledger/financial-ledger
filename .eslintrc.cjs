module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["airbnb", "airbnb-typescript", "plugin:prettier/recommended"],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "postcss.config.cjs",
    "scripts",
    "src/common/icons/lib",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-one-expression-per-line": "off",
    "import/no-extraneous-dependencies": "off",
    "react/require-default-props": "off",
    "implicit-arrow-linebreak": "off",
    "object-curly-newline": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-use-before-define": "off",
  },
};
