module.exports = {
  parser: 'babel-eslint',
  env: { browser: true, node: true },
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-console': 0,
    'import/no-extraneous-dependencies': 0
  }
};
