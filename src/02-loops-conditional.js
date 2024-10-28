/**
 * This function returns the next even number after the given number.
 *
 * @param {number} n - The number.
 * @returns {number} - The next even number after the given number.
 *
 * Usage:
 * const nextEven = getNextEven(3); // nextEven will be 4
 * const anotherNextEven = getNextEven(8); // anotherNextEven will be 10
 */

function getNextEven(n) {
  if (n % 2 === 0) {
    return n + 2;
  } else {
    return n + 1;
  }
}

/**
 * This function checks if a number is a multiple of another number.
 *
 * @param {number} n - The number to check.
 * @param {number} m - The number to check divisibility against.
 * @returns {boolean} - True if n is a multiple of m, false otherwise.
 *
 * Usage:
 * const isMultiple = isMultipleOf(10, 2); // isMultiple will be true because 2 can be divided with 10
 * const notMultiple = isMultipleOf(10, 3); // notMultiple will be false
 */

function isMultipleOf(n, m) {
  if (n % m === 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * This function counts the number of uppercase letters in a string.
 *
 * @param {string} str - The input string.
 * @returns {number} - The count of uppercase letters.
 *
 * Usage:
 * const capitalCount = countCapitals("Hello World"); // capitalCount will be 2
 * const anotherCapitalCount = countCapitals("JavaScript"); // anotherCapitalCount will be 2
 */
function countCapitals(str) {
  let capitalCounter = 0;
  for (char of str) {
    if (char !== char.toLowerCase() && /[a-zA-Z]/.test(char)) {
      capitalCounter += 1;
    }
  }
  return capitalCounter;
}

/**
 * This function takes two words, combines them, and counts the number of vowels.
 *
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {number} - The total number of vowels in both words combined.
 *
 * Usage:
 * const vowelCount = countVowelsInWords("hello", "world"); // vowelCount will be 3
 * const anotherCount = countVowelsInWords("apple", "banana"); // anotherCount will be 5
 */
function countVowelsInWords(word1, word2) {
  let vowelCounter = 0;

  const count = (word) => {
    const vowels = word.match(/[aeiouAEIOU]/gi);
    if (vowels) {
      vowelCounter += vowels.length;
    }
  };

  // if (word1.length !== 0) {
  //   count(word1);
  // }
  // if (word2.length !== 0) {
  //   count(word2);
  // }
  //
  count(word1);
  count(word2);

  return vowelCounter;
}
