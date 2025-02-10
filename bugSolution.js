function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }

  // Type check and convert to numbers
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return 0; // Handle NaN values
  }

  return a + b; // Numerical addition
}

console.log(foo(10, '20')); // Now returns 30
console.log(foo(10, null)); // Returns 0
console.log(foo(null, 20)); // Returns 0
console.log(foo('hello', 20)); // Returns 0