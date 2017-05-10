var fs = require('fs');
var path = require('path');

var ORIGINAL_FILE_PATH = '../../languages/en.js';
var originalFile = fs.readFileSync(path.join(__dirname, ORIGINAL_FILE_PATH)).toString();

var INPUT_FOLDER_NAME = 'input';
var OUTPUT_FOLDER_NAME = 'output';
var OUTPUT_FOLDER_PATH = path.join(__dirname, OUTPUT_FOLDER_NAME);

fs.readdir(path.join(__dirname, INPUT_FOLDER_NAME), function (err, list) {
  list.forEach(function (languageCode) {
    if (fs.lstatSync(path.join(__dirname, INPUT_FOLDER_NAME, languageCode)).isDirectory()) {
      var coreJSON = require('./' + INPUT_FOLDER_NAME + '/' + languageCode + '/core.json');

      var modifiedFileText = originalFile;
      for (var key in coreJSON) {
        var constantCommandName = key.slice(1).toUpperCase();
        modifiedFileText = modifiedFileText.replace(
          new RegExp('command\\:\\s*COMMAND\\.' + constantCommandName + ',\\s+definition\\:\\s+\'[a-z_A-Z|]+\'', 'g'),
          'command: COMMAND.' + constantCommandName + ',\n  definition: \'' + coreJSON[key] + '\''
        );
      }

      fs.writeFileSync(path.join(OUTPUT_FOLDER_PATH, languageCode + '.js'), modifiedFileText);
    }
  });
});

console.log('json 2 tree: completed');