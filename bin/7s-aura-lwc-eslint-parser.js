#!/usr/bin/env node

'use strict';

const rules = [
  {
    files: ['*.test.js'],
    rules: {
      '@lwc/lwc/no-unexpected-wire-adapter-usages': 'off',
    },
  },
  {
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
  },
];

const fs = require('fs');
const lwcEslintFileName = 'force-app/main/default/lwc/.eslintrc.json';
const auraEslintFileName = 'force-app/main/default/aura/.eslintrc.json';

const fnReadWriteFile = (fileName) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);

    data.overrides = rules;

    data = JSON.stringify(data, null, 2);
    fs.writeFile(fileName, data, (err) => {
      err || console.log('Data replaced \n', data);
    });

    console.log('data: ', data);
  });
};

fnReadWriteFile(lwcEslintFileName);
// fnReadWriteFile(auraEslintFileName);
