module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    // eslint-disable-next-line quote-props
    quotes: ['error', 'single'],
    // eslint-disable-next-line quote-props
    semi: ['error', 'never'],
    // eslint-disable-next-line quote-props
    indent: ['error', 2],
    'object-curly-spacing': [2, 'always'],
  },
}
