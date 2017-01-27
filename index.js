const languageList = ['en', 'hy', 'ru', 'it'];

const languages = {};
languageList.forEach((language) => {
  languages[language] = require('./languages/' + language);
});

module.exports = languages;