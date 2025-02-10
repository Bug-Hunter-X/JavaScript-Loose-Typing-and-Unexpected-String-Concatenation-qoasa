# JavaScript Loose Typing and Unexpected String Concatenation

This example demonstrates a common error in JavaScript due to its dynamic typing.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition.

## The Bug

The function `foo` attempts to add two numbers, but if either input is a string or `null`, unexpected results occur.  Specifically, the function may return a concatenated string instead of a sum.

## The Solution

The solution is to explicitly type-check the inputs to ensure they are numbers before performing the addition.  We also handle `null` values appropriately.