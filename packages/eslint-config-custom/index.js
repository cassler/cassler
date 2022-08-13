module.exports = {
  extends: ["turbo", "airbnb-typescript/base"],
  plugins: ["import", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
