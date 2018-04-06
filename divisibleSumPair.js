/* You are given an array of n integers, and a positive integer, k. Find and print the number of pairs where i < j and a[i]+a[j]  is evenly divisible by k.*/
/* e.g. [1, 3, 2, 6, 1, 2] 
when k = 3;

(0, 2), (0, 5), (1, 3), (2, 4), (4, 5)
these 5 pairs are divisible by k

*/
function divisibleSumPairs(n, k, ar) {
  // Complete this function
  let countPair = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j <= n - 1; j++) {
      if (([ar[i] + ar[j]]) % k === 0 ) {
        countPair++;
      }
    }
  }
  return countPair;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);