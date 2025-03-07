import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

import rootConfig from "../eslint.config.js";

/** @type {import('eslint').Linter.Config[]} */
const config = [
	...rootConfig,
	{
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: globals.browser
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh
		},
		rules: {
			"react/react-in-jsx-scope": "off"
		}
	}
];

export default config;
