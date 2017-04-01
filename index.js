var languageList = require('./languageList');

var languages = {};
languageList.forEach(function (language) {
  languages[language] = require('./languages/' + language);
});

module.exports = languages;