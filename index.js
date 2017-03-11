var languageList = require('./languageList');

var languages = {};
languageList.forEach((language) => {
  languages[language] = require('./languages/' + language);
});

module.exports = languages;