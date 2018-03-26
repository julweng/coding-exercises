function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, '');
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('aabca'));
console.log(isPalindrome('aabbaa'));
console.log(isPalindrome("madam i'm adam"));