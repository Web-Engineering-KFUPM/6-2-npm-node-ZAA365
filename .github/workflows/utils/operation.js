export function add(numbers) {
    return {result: numbers.reduce((sum, num) => sum + num, 0)}
    }
    export function subtract(numbers) {
      return {result: numbers[0] - numbers.slice(1).reduce((diff, num) => diff - num, 0)}

    }
    //check both
    export function multiply(numbers) {
      return {result: numbers.reduce((mul, num) => mul * num, 1)}
    }

    export function divide(numbers) {
      return {result: numbers.reduce((result, num,index) => {
        if (index===0) return num;
        if (num === 0) return NaN;
        return result/num;
    }
        , 0)}
    }