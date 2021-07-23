exports.rules = {
  files: ['*.js'],
  rules: {
    '@lwc/lwc/no-unexpected-wire-adapter-usages': 'off',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
  },
};
