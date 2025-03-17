/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing English letters (lower or upper-case), return true if sentence is a pangram, or false otherwise.

Note: The given sentence might contain other characters like digits or spaces, your solution should handle these too.

Example 1:

Input: sentence = "TheQuickBrownFoxJumpsOverTheLazyDog"
Output: true
Explanation: The sentence contains at least one occurrence of every letter of the English alphabet either in lower or upper case.
Example 2:

Input: sentence = "This is not a pangram"
Output: false
Explanation: The sentence doesn't contain at least one occurrence of every letter of the English alphabet.
*/

class Solution {
  // Function to check if given sentence is pangram
  checkIfPangram(sentence) {
    const letters = new Set();

    for (const char of sentence) {
      if (/[a-zA-Z]/.test(char)) {
        letters.add(char.toLowerCase());
      }
    }

    return letters.size === 26;
  }
}

// Sample usage
const sol = new Solution();

// Test cases
console.log(sol.checkIfPangram("TheQuickBrownFoxJumpsOverTheLazyDog")); // Expected output: true
console.log(sol.checkIfPangram("This is not a pangram")); // Expected output: false
console.log(sol.checkIfPangram("abcdef ghijkl mnopqr stuvwxyz")); // Expected output: true
console.log(sol.checkIfPangram("")); // Expected output: false
console.log(
  sol.checkIfPangram("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
); // Expected output: true
