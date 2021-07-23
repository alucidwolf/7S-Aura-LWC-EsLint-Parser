const fs = require('fs');
const lwcEslintFileName = 'force-app/main/default/lwc/.eslintrc.json';
const auraEslintFileName = 'force-app/main/default/aura/.eslintrc.json';

const fnReadWriteFile = (fileName) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);

    if (data.extends && data.extends.length > 0) {
      if (data.extends.includes('@alucidwolf/vscode-husky/standard')) {
        console.log('Already updated');
        return;
      }

      data.extends.splice(1, 0, '@alucidwolf/vscode-husky/standard');

      data = JSON.stringify(data, null, 2);
      fs.writeFile(fileName, data, (err) => {
        err || console.log('Data replaced \n', data);
      });
    }
  });
};

exports.parse = function () {
  fnReadWriteFile(lwcEslintFileName);
  fnReadWriteFile(auraEslintFileName);
};
