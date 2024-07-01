module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:eslint-plugin-next-on-pages/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  globals: {
    React: 'readonly',
  },
  plugins: ['eslint-plugin-next-on-pages', 'prettier'],
  rules: {
    'linebreak-style': ['warn', 'unix'],
    quotes: ['off', 'single'],
    semi: ['off', 'always'],
    'prettier/prettier': 0,
    'react-hooks/rules-of-hooks': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-console': 'warn',
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
};
