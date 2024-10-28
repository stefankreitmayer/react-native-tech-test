module.exports = [
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      react: require("eslint-plugin-react"),
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
      "no-console": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
