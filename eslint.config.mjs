import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    prettierConfig,
    {
        plugins: {
            prettier,
        },
        rules: {
            "prettier/prettier": "warn",
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "no-console": "warn",
        },
    },
];
