module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'max-len': ['warn', { code: 80 }],
    'import/no-unresolved': [0, { caseSensitive: false }],
    'no-magic-numbers': 'warn',
    'react-hooks/exhaustive-deps': 0,
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
  },
};
