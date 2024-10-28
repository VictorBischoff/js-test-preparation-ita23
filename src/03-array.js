/**
 * This function returns the last element in an array
 *
 * @param {Array<number>} array - The array to find the last number of
 * @returns {number} - The last number in the array
 *
 * Usage:
 * const lastElement = getLastElement([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
 * console.log(lastElement); // 20
 */
function getLastElement(array) {
  return array[array.length - 1];
}

/**
 * This function returns an array of even numbers from the specified start to finish.
 *
 * @param {number} start - The starting number of the range (inclusive).
 * @param {number} finish - The ending number of the range (inclusive).
 * @returns {Array<number>} - An array containing even numbers from start to finish.
 *
 * Usage:
 * const numbers = returnEvenNumbers(2, 20);
 * // numbers will be [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */
function returnEvenNumbers(start, finish) {
  let evens = [];
  for (let i = start; i <= finish; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }
  return evens;
}

/**
 * This function returns a new array with the square of each number from the input array.
 *
 * @param {number[]} array - Array of numbers.
 * @returns {number[]} - Array with the square of each number.
 *
 * Usage:
 * const squares = squareArray([1, 2, 3]); // squares will be [1, 4, 9]
 * const anotherSquares = squareArray([-1, -2, 3]); // anotherSquares will be [1, 4, 9]
 */
function squareArray(array) {
  let sqrt = [];
  for (num of array) {
    sqrt.push(num * num);
  }
  return sqrt;
}

/**
 * This function returns the maximum number in an array.
 *
 * @param {number[]} array - Array of numbers.
 * @returns {number} - The maximum number in the array.
 *
 * Usage:
 * const max = findMax([1, 2, 3]); // max will be 3
 * const anotherMax = findMax([-1, -2, 3]); // anotherMax will be 3
 */
function findMax(array) {
  return Math.max(...array);
}

/**
 * This function calculates the sum of elements at odd indices in an array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The sum of the elements at odd indices.
 *
 * Usage:
 * const sumOdd = sumOddIndices([10, 20, 30, 40, 50]); // sumOdd will be 60 (20 at index 1 + 40 at index 3)
 * const anotherSumOdd = sumOddIndices([1, 3, 5, 7]); // anotherSumOdd will be 10 (3 + 7)
 */
function sumOddIndices(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      num += Number(arr[i]);
    }
  }
  return num;
}

