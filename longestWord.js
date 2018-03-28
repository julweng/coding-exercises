// longest word in a sentence
// LongestWord("the $$$longest# word is coderbyte"); 
// symbols characters do not count

function longestWord(s) {
  let longest = '';
  let max = 0;

  let arr = s.match(/[a-zA-Z0-9]+/gi);

  const map = {};
  
  for (let word of arr) {
    map[word] = word.length;
  }

  for (let word in map) {
    if (map[word] > max) {
      longest = word;
      max = map[word];
    }
  }
  
  return longest;
}

// use sort
function longestWord2(s) {
  let longest = '';
  let max = 0;
  
  let arr = s.match(/[a-zA-Z0-9]+/gi);
  
  let sorted = arr.sort((a, b) => b.length - a.length);
  
  return sorted[0];
}

longestWord("the $$$longest# word is coderbyte"); 
longestWord2("the $$$longest# word is coderbyte"); 
