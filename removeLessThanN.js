// given an array of numbers. Write an algorithm to remove all numbers 
// less than n from the array. 

// use array filter method
function removeLessThanN(n, arr) {
  return arr.filter(num => num >= 5);
}


// what if can't use array filter
// assume array is not sorted and cannot use array sort
// O(n)
function removeLessThanN_unsort(n, arr) {
  let result = [];
  for (let num of arr) { 
    if (num >= n) {
      result.push(num);
    }
  }
  return result;
}

/*
function removeLessThanN_unsort(n, arr) {
  let result = [];
  arr.forEach(num => {
    if (num >= n) {
      result.push(num);
    }
  })
  return result;
}

function removeLessThanN_unsort(n, arr) {
  let result = [];
  arr.map(num => {
    if (num >= n) {
      result.push(num);
    }
  })
  return result;
}

*/

// if array is sorted, O(log(n))
function removeLessThanN_bs(n, arr) {
  let low = 0;
  let hi = arr.length - 1;
  
  while (low + 1 < hi) {
    let mid = Math.floor(low + (hi - low) / 2);
    if (arr[mid] <= n) {
      low = mid;
    } else {
      hi = mid;
    }
  }
  if (arr[low] >= n) {
    return arr.slice(low, arr.length);
  }
  if (arr[hi] >= n) {
    return arr.slice(hi, arr.length);
  } 
}

let arr = [1, 7, 6, 4, 5, 3, 2, 8];
let sorted = arr.sort();
console.log(sorted);
console.log(removeLessThanN(5, arr));
console.log(removeLessThanN_unsort(5, arr));
console.log(removeLessThanN_bs(5, sorted));

