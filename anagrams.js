// find if two strings are anagrams of each other
function anagrams(strA, strB) {
  return strA.toLowerCase().replace(/[^a-z0-9]/g,'').split('').sort().join('') === strB.toLowerCase().replace(/[^a-z0-9]/g,'').split('').sort().join('');
}

// use hash map
function anagrams2(strA, strB) {
  let mapA = buildMap(strA);
  let mapB = buildMap(strB);
  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }
  for (let ch in mapA) {
    if (mapA[ch] !== mapB[ch]) {
      return false;
    }
  }
  return true;
}

// build hash map
function buildMap(str) {
  const map = {};
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  for (let ch of str) {
    map[ch] = map[ch] + 1 || 1;
  }
  return map;
}

console.log(anagrams("anagrams", "gram ana's"));
console.log(anagrams2("anagrams", "gram ana's"));

console.log(anagrams('Hey there', 'Bye'));
console.log(anagrams2('Hey there', 'Bye'));
