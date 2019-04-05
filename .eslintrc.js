module.exports = {
  globals: {
    graphql: true,
    __PATH_PREFIX__: true
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'consistent-return': ['warn'],
    'react/prop-types': ['warn'],
    'comma-dangle': ['error', 'never'],
    'no-underscore-dangle': 'off',
    'react/no-danger': 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
};
