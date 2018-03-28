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

// can i use a binary search approach??
function search(arr, ch) {
  let start = 0;
  let end = arr.length - 1;

  while (start + 1 < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid].charCodeAt(0) === ch.charCodeAt(0)) {
      return true;
    } else if (arr[mid].charCodeAt(0) < ch.charCodeAt(0)) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (arr[start].charCodeAt(0) === ch.charCodeAt(0)) {
    return true;
  }
  if (arr[end].charCodeAt(0) === ch.charCodeAt(0)) {
    return true;
  }
  return false;
}

// note that array to compare must be sorted first for search to work
function vowel3(s) {
  let arr = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let ch of s) {
    if(search(arr, ch)) {
      count++;
    }
  }
  return count;
}

console.log(vowel('apple'));
console.log(vowel2('apple'));
console.log(vowel3('apple'));

console.log(vowel('sensible'));
console.log(vowel2('sensible'));
console.log(vowel3('sensible'));

// which would be faster?
// built-in methods are optimized to run on javascript engine...
// so for vowel and vowel2, it would be O(n) * runtime of built-in methods.
// e.g. sting.prototype.match() might take O(n) 
// but I wonder if it'd be faster since it is optimized
// Anyways, I know binary search is O(log(n)) 
// in vowel3, each iteration calls search() once
// so this is O(n(log(n))); quasilinear run time complexity