var _ = require('lodash');
var fs = require('fs');

var language = require('../../languages/en');

var languageConverted = {};
language.forEach(function(instance) {
  languageConverted[instance.command] = instance.definition;
});


fs.writeFile("../../core.json", JSON.stringify(languageConverted), function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});

console.log('tree 2 json: completed');