import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-unused-expressions": "warn",
      "react/prop-types": ["off"],
      "no-undef": "off",
      "react/no-unescaped-entities": "off",
      "react/no-unknown-property": "off",
    },
  },
];
