/*
Given an array of strings words and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

Example 1:

Input: words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], word1 = "fox", word2 = "dog"
Output: 5
Explanation: The distance between "fox" and "dog" is 5 words.

Example 2:

Input: words = ["a", "c", "d", "b", "a"], word1 = "a", word2 = "b"
Output: 1
Explanation: The shortest distance between "a" and "b" is 1 word. Please note that "a" appeared twice.

Example 3:

Input: words = ["a", "b", "c", "d", "e"], word1 = "a", word2 = "e"
Output: 4
Explanation: The distance between "a" and "e" is 4 words.
*/

class Solution {
  shortestDistance(words, word1, word2) {
    // initialize the shortest distance with the length of the words list
    let shortestDistance = words.length;

    // initialize the positions of word1 and word2 with -1
    let position1 = -1;
    let position2 = -1;

    for (let i = 0; i < words.length; i++) {
      if (words[i] == word1) {
        // if the current word is word1, update position1
        position1 = i;
      } else if (words[i] == word2) {
        // if the current word is word2, update position2
        position2 = i;
      }

      if (position1 !== -1 && position2 !== -1) {
        shortestDistance = Math.min(
          shortestDistance,
          Math.abs(position2 - position1),
        );
      }
    }

    return shortestDistance;
  }
}

const solution = new Solution();

// Test case 1
const words1 = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];
const word11 = "fox";
const word21 = "dog";
const expectedOutput1 = 5;
const actualOutput1 = solution.shortestDistance(words1, word11, word21);
console.log("Test case 1:", expectedOutput1 === actualOutput1);

// Test case 2
const words2 = ["a", "b", "c", "d", "a", "b"];
const word12 = "a";
const word22 = "b";
const expectedOutput2 = 1;
const actualOutput2 = solution.shortestDistance(words2, word12, word22);
console.log("Test case 2:", expectedOutput2 === actualOutput2);

// Test case 3
const words3 = ["a", "c", "d", "b", "a"];
const word13 = "a";
const word23 = "b";
const expectedOutput3 = 1;
const actualOutput3 = solution.shortestDistance(words3, word13, word23);
console.log("Test case 3:", expectedOutput3 === actualOutput3);

// Test case 4
const words4 = ["a", "b", "c", "d", "e"];
const word14 = "a";
const word24 = "e";
const expectedOutput4 = 4;
const actualOutput4 = solution.shortestDistance(words4, word14, word24);
console.log("Test case 4:", expectedOutput4 === actualOutput4);
