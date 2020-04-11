module.exports = {
	parser: "@typescript-eslint/parser",
	// eslint-config-prettier is a config that disables rules that conflict with Prettier. Add it to your
	extends: [
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
	],
	// eslint-plugin-prettier is a plugin that adds a rule that formats content using Prettier
	plugins: ["prettier"],
	parserOptions: {
		ecmaVersion: 11,
		// script | module
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		"prettier/prettier": "error",
		"semi": ["error", "never"],
		"@typescript-eslint/explicit-function-return-type": "off",
	},
}
