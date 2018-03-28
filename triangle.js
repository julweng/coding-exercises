// given n as an integer, print 
// '  #  '
// ' ### '
// '#####'

function triangle(n) {
  for (let i = 0; i < n; i++) {
    console.log(' '.repeat(n - i - 1), '#'.repeat(i * 2 + 1), ' '.repeat(n - i - 1))
  }
}

triangle(3);
triangle(4);