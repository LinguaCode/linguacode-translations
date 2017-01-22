const languageList = ['en', 'hy', 'ru', 'it'];

let languages = {};

for (let key in languageList) {
  languages[key] = require('./languages/' + key);
}

module.exports = languages;