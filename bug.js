function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Potential error if a or b is NaN
}

console.log(foo(10, '20')); // Unexpected behavior, may return a string concatenation