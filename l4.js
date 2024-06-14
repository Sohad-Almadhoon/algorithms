// Factorial Recursion O(n)
function fac(num) {
    if (num <= 1) return 1;
    return fac(num - 1) * num;
}
console.log(fac(1)); 
console.log(fac(2));
console.log(fac(3)); // 3 2 1 3*fac(2)3*2*fac(1)
console.log(fac(5));