const languageList = ['en', 'hy', 'ru', 'it'];

var languages = {};
languageList.forEach((language) => {
  languages[language] = require('./languages/' + language);
});

module.exports = languages;