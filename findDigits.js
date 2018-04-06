/* given an integer, e.g. 18, split it up into two digits, 1 and 8, 
print the how many times the original integer can be divisible by its split
digits 
 e.g. n = 18 would return 1, because only 18 % 1 === 0
*/

function findDigits(n) {
  numArr = n.toString().split('').map(ch => {
    return parseInt(ch);
  });
  
  let count = 0;
  
  numArr.forEach(num => {
    if (n % num === 0) {
      count++;
    }
  })  
  
  return count;
}


findDigits(14);