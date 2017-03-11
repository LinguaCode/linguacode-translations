var path = require('path');
var fs = require('fs');

var LANGUAGE_FOLDER_PATH = '../../languages';

fs.readdir(path.join(__dirname, LANGUAGE_FOLDER_PATH), function (err, list) {
  list = list.map(language=>language.substring(0, language.indexOf('.')));

  fs.writeFileSync(`languageList.js`, `module.exports = ['${list.join('\', \'')}'];`);
});