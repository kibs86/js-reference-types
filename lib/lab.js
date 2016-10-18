'use strict';

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const getNormalizedWords = function(string) {
  // split the string into an array of words
  let words = string.split(/\s+/);
  // normalize these words
  let normalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/\W+/, '');
    normalizedWords[i] = word.toUpperCase();
  }
  return normalizedWords;
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const getUniqueWords = function(string) {
  let normalizedWords = getNormalizedWords(string);
  // create object of unique words
  let uniqueWordsAsKeys = {};
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }
  // pull unique words out of object into array
  let uniqueWords = [];
  let k = 0;
  for(uniqueWords[k++] in uniqueWordsAsKeys); // jshint ignore:line
  return uniqueWords;
};

// 3. Write a function that returns the count of words in a string.
// Provide the *option* to count unique words instead of total words.
const wordCount = function(string, unique) {
  unique = (unique || false);
  if (unique === true) {
    let uniqueWords = getUniqueWords(string);
    return uniqueWords.length;
  } else {
    let normalizedWords = getNormalizedWords(string);
    return normalizedWords.length;
  }
};

// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount,
};
