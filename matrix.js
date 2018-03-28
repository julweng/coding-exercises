// given n as an integer, make a n * n 2D array, and 
// create a spiral matrix [[1, 2, 3], [8, 9, 4], [7, 6, 5]]

// there's probably a better way...
function matrix(n) {
  // make an empty 2D array
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }
  // define row and col limits
  let rowStr = 0;
  let colStr = 0;
  let rowEnd = n - 1;
  let colEnd = n - 1;
  
  let num = 1;

  while (rowStr <= rowEnd && colStr <= colEnd) {
  // first row
    for (let i = colStr; i < colEnd; i++) {
      arr[rowStr][i] = num;
      num++;
    }

    // last col
    for (let i = rowStr; i < rowEnd; i++) {
      arr[i][colEnd] = num;
      num++;
    }

    // last row
    for (let i = colEnd; i > colStr; i --) {
      arr[rowEnd][i] = num;
      num++;
    }

    // first col
    for (let i = rowEnd; i > rowStr; i--) {
      arr[i][colStr] = num;
      num++;
    }
    
    // a square left if n is odd
    if (rowStr === rowEnd && colStr === colEnd) {
      arr[rowEnd][colEnd] = num;
    }

    rowStr++;
    rowEnd--;
    colStr++;
    colEnd--;
  }
  return arr;
}

console.log(matrix(3));
console.log(matrix(4));
