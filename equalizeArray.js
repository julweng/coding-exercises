/* print the minimum amount of change to make all the integers in an array equal.
for example, [3, 3, 1, 2, 3], delete 2 integers: 1 and 2, the rest will be equal.
Therefore, the function should return 2 */

/* I have decided that for some of the hackerrank questions, I am not going to
do it on hackerrank because the environment for JS sucks...*/

/* so...I want to start a hashmap, the keys with the max count will be used to 
figure out how many I need to delete. 2 loops so O(2n) roughly O(n);
*/

function equalizeArray(arr) {
  const hashmap = {};
  for (let num of arr) {
    hashmap[num] = hashmap[num] + 1 || 1;
  }
  let max = 0;
  for (let num in hashmap) {
    if (hashmap[num] > max) {
      max = hashmap[num];
    }
  }
  return arr.length - max;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));

