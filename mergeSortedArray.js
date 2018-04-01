// Given two arrays which have already been sorted, write an
// algorithm to merge the two arrays into a single array, which
// should also be sorted. For example, if your input arrays were
// [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10], your output array
// should be [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11].

function mergeSortedArray(arr1, arr2) {
  if (!arr1 || !arr2) {
    return -1;
  }
  let merged = [];
  while (arr1.length || arr2.length) {
    if (arr1[0] > arr2[0]) {
      merged = [...merged, ...arr2.splice(0, 1)];
    } else if (!arr1.length) {
      merged = [...merged, ...arr2.splice(0, 1)];
    } else {
      merged = [...merged, ...arr1.splice(0, 1)];
    }
  }
  return merged;
}

let arr1 = [1, 3, 6, 8, 11];
let arr2 = [2, 3, 5, 8, 9, 10];
console.log(mergeSortedArray(arr1, arr2));