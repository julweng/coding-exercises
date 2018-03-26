// reverse characters in a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// if not allowed to use split, reverse, join
function reverseString2(str) {
  let reversed = '';
  for (let ch of str) {
    reversed = ch + reversed;
  }
  return reversed;
}

console.log(reverseString('apple'));
console.log(reverseString2('apple'));

console.log(reverseString('hello!'));
console.log(reverseString2('hello!'));

console.log(reverseString('hm...'));
console.log(reverseString2('hm...'));
