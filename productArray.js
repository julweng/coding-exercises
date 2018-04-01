// Given an array of numbers, write an algorithm to find out the products of every number, 
// except the one at that index. For example, if the input was [1, 3, 9, 4], the output 
// should be [108, 36, 12, 27] (i.e. [3*9*4, 1*9*4, 1*3*4, 1*3*9]).

let arr = [1, 3, 9, 4];
function productArray(arr) {
  let product = 1;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = product;
    product *= arr[i];
  }
  
  product = 1;
 
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= arr[i];
  }
 
  return result; 
}

console.log(productArray(arr));

