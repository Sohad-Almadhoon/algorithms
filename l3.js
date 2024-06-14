// Prime Number O(n)
function isPrime(num) {
  if (num < 2) return false;
    for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
}
return true;
}
console.log(isPrime(9));
console.log(isPrime(1));
console.log(isPrime(8));
console.log(isPrime(5));
console.log(isPrime(7));

