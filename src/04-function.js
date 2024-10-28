/**
 * This function greets a user by name.
 *
 * @param {string} name - Name of the user.
 * @returns {string} - Greeting message for the user.
 *
 * Usage:
 * const greetJack = greetUser("Jack"); // greetJack will be "Hello, Jack"
 */
const greetUser = (username) => {
  return `Hello, ${username}`;
};

/**
 * This function converts a string to spinal case.
 *
 * @param {string} str - The string to be converted.
 * @returns {string} - The spinal cased string. Should be lower case
 *
 * Usage:
 * const spinal = toSpinalCase("This Is Spinal Tap"); // spinal will be "this-is-spinal-tap"
 */
const toSpinalCase = (str) => {
  if (str.length !== 0) {
    let strSplit = str.toLowerCase().split(" ");
    return strSplit.join("-");
  }
  return "";
};

console.log(toSpinalCase("Hello World"));

/**
 * This function calculates the time taken by light to travel a certain distance.
 *
 * @param {number} distance - The distance in kilometers.
 * @returns {number} - Time taken in seconds.
 *
 * Usage:
 * const time = lightTravelTime(300000); // time will be 1
 */

const lightTravelTime = (distance) => {
  return distance / 300000;
};

console.log(lightTravelTime(600000));

/**
 * This function checks if two words are mirror words.
 *
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {boolean} - True if word1 is a mirror of word2, false otherwise.
 *
 * Usage:
 * const isMirror = mirrorWordCheck("stressed", "desserts"); // isMirror will be true
 * const notMirror = mirrorWordCheck("hello", "world"); // notMirror will be false
 */
function mirrorWordCheck(word1, word2) {
  const word2Reversed = word2.split("").reverse().join("");
  if (word1 === word2Reversed) {
    return true;
  }

  return false;
}
