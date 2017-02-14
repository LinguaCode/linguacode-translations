const fs = require('fs');
const path = require('path');

const ORIGINAL_FILE_PATH = '../../languages/en.js';
const originalFile = fs.readFileSync(path.join(__dirname, ORIGINAL_FILE_PATH)).toString();

const INPUT_FOLDER_NAME = 'input';
const OUTPUT_FOLDER_NAME = 'output';
const OUTPUT_FOLDER_PATH = path.join(__dirname, OUTPUT_FOLDER_NAME);

fs.readdir(path.join(__dirname, INPUT_FOLDER_NAME), function (err, list) {
  list.forEach((languageCode) => {
    if (fs.lstatSync(path.join(__dirname, INPUT_FOLDER_NAME, languageCode)).isDirectory()) {
      const coreJSON = require(`./${INPUT_FOLDER_NAME}/${languageCode}/core.json`);

      let modifiedFileText = originalFile;
      for (let key in coreJSON) {
        const constantCommandName = key.slice(1).toUpperCase();
        modifiedFileText = modifiedFileText.replace(
          new RegExp(`command\\:\\s*COMMAND.${constantCommandName},\\s+definition\\:\\s+'[a-zA-Z]+'`, 'g'),
          `command: COMMAND.${constantCommandName},\n  definition: '${coreJSON[key]}'`
        );
      }

      fs.writeFileSync(path.join(OUTPUT_FOLDER_PATH, `${languageCode}.js`), modifiedFileText);
    }
  });
});

console.log('json 2 tree: completed');