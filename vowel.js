// use string method and regexp
function vowel(str) {
  let howMany = str.match(/[aeiou]/g);
  return howMany.length;
}

// use array method
function vowel2(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let ch of str) {
    if (vowels.includes(ch)) {
      count++;
    }
  }
  return count;
}

console.log(vowel('apple'));
console.log(vowel2('apple'));

console.log(vowel('sensible'));
console.log(vowel2('sensible'));
