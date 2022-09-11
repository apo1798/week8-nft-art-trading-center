module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'next/core-web-vitals',
    // 'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['tailwindcss', 'react', 'prettier'],
  rules: {
    // 'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    // "react/react-in-jsx-scope": "off",
    // "react/prop-types": 0,
    // "jsx-quotes": ["warn", "prefer-single"],
    'import/no-absolute-path': 0,
    quotes: ['error', 'single'],
    // 'prettier/prettier': ['error'],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
