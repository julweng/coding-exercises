function reverseInt(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

console.log(reverseInt(0));
console.log(reverseInt(31));
console.log(reverseInt(100));
console.log(reverseInt(-15));