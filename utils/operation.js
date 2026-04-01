export function add(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0)
    }
    export function subtract(numbers) {
      return numbers.slice(1).reduce((result, num) => result - num, numbers[0]);
    }
    //check both
    export function multiply(numbers) {
      return  numbers.reduce((mul, num) => mul * num, 1)
    }

    export function divide(numbers) {
      return numbers.slice(1).reduce((result, num) => {
    if (num === 0) return NaN;
    return result / num;
  }, numbers[0]);}
    /*
===============================================================
TODO 4: Create Math Operation Functions (in utils/operations.js)
===============================================================
Goal: Implement functions that perform mathematical operations on arrays of numbers.

TODO 4.1: Add Function
- Calculate the sum of all numbers in the array
- Use Array.reduce() or a loop

TODO 4.2: Subtract Function
- Start with the first number, subtract all others
- Example: subtract([10, 3, 2]) → 10 - 3 - 2 = 5

TODO 4.3: Multiply Function
- Multiply all numbers together
- Example: multiply([2, 3, 4]) → 2 * 3 * 4 = 24

TODO 4.4: Divide Function
- Start with the first number, divide by all others
- Example: divide([20, 2, 5]) → 20 / 2 / 5 = 2
- Handle division by zero (return error message or NaN)

Hints:
- Use Array.reduce() for cleaner code
- For subtract and divide, skip the first element in the reduce

Example for add:
  export function add(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
*/