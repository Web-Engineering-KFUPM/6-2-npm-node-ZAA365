import _ from "lodash"

        export function parseNumbers(input) {
          const numbers = _.map(input, (str) => Number(str));
            return _.compact(numbers);
          }

          export function isValidOperation(operation) {
            const validOps = ["add","subtract","multiply","divide"];
            return _.includes(validOps, operation);
          }
/*===============================================================
TODO 5: Create Parser Functions Using Lodash (in utils/parser.js)
===============================================================
Goal: Use lodash (a third-party npm package) to parse and validate input.

TODO 5.1: Parse Numbers Function
- Convert an array of strings to an array of numbers
- Use lodash's _.map() to convert each string to a number
- Use lodash's _.compact() to remove any invalid entries

Hints:
- _.map(array, function) applies a function to each element
- _.compact(array) removes falsy values (null, undefined, false, 0, "")
- Use Number() or parseFloat() to convert strings to numbers

Example:
  export function parseNumbers(input) {
    const numbers = _.map(input, (str) => Number(str));
    return _.compact(numbers);
  }

TODO 5.2: Validate Operation Function
- Check if the operation is one of: "add", "subtract", "multiply", "divide"
- Use lodash's _.includes() to check if the operation is in the valid operations array

Hints:
- _.includes(array, value) checks if a value exists in an array
- Create an array of valid operations: ["add", "subtract", "multiply", "divide"]

Example:
  export function isValidOperation(operation) {
    const validOps = ["add", "subtract", "multiply", "divide"];
    return _.includes(validOps, operation);
  }*/