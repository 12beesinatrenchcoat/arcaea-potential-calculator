module.exports = {
	root: true,
	extends: ['xo', 'eslint:recommended', 'prettier'],
	plugins: ['svelte3'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2021
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		quotes: 0
	}
};
