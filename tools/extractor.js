const _ = require('lodash');
const fs = require('fs');

const language = require('../languages/es');

const languageConverted = {};
language.forEach((instance) => {
  languageConverted[instance.command] = instance.definition;
});


fs.writeFile("../core.json", JSON.stringify(languageConverted), function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});