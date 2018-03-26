function makeSubarray(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i+=n) {
    result.push(arr.slice(i, i+n));
  }
  return result;
}

console.log(makeSubarray([1, 2, 3, 4], 2));
console.log(makeSubarray([1, 2, 3, 4, 5, 6], 3));
console.log(makeSubarray([1, 3, 4, 6], 3));