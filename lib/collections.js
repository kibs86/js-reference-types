'use strict';

const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';

// The paragraph split into a list
let words = paragraph.split(/\s+/);

// The word list normalized (all uppercase with punctuation removed)
let normalizedWords = [];
for (let i = 0; i < words.length; i++) {
  let word = words[i].replace(/\W+/, '');       //removes non-word characters
  normalizedWords[i] = word.toUpperCase();      //convert each word to uppercase and store in normalizedWords
}

// The words stored as keys of a dictionary
let uniqueWordsAsKeys = {};
for (let i = 0; i < normalizedWords.length; i++) {
  let word = normalizedWords[i];
  uniqueWordsAsKeys[word] = true;     //add word as key to uniqueWordsAsKeys and set its value to true. Once a key exists, it won't add a second occurence.
}

// The keys pulled out into a list
let uniqueWords = [];

let k = 0;

// No .length for objects so this increments k to give us the object length.
for(uniqueWords[k++] in uniqueWordsAsKeys); // jshint ignore:line

// The words as keys and the values the count of each word
let wordFrequencies = {};

// function takes a number or 0 if num isn't provided and add 1 to it
const addOne = function(num){
  return (num || 0) +1;
};

//grab a word from normalizedWords and add it as a key to wordFrequencies then
//run its value through the addOne function. to start this will be undefined
//so 0 will be used
for (let i = 0; i < normalizedWords.length; i++) {
  let word = normalizedWords[i];
  wordFrequencies[word] = addOne(wordFrequencies[word]);
}

module.exports = {
  normalizedWords,
  uniqueWords,
  wordFrequencies,
};
