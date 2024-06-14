// Factorial of a Number O(n)
const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  console.log(result);
};
factorial(3); // 3*2*1 => 6
factorial(4); 

