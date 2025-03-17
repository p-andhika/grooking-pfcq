/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: sentence = "A man, a plan, a canal, Panama!"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: sentence = "Was it a car or a cat I saw?"
Output: true
Explanation: Explanation: "wasitacaroracatisaw" is a palindrome.
*/

class Solution {
  isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      // skip non-alphanumeric characters from the left
      while (left < right && !this.isAlphanumeric(s[left])) {
        left++;
      }

      // skip non-alphanumeric characters from the right
      while (left < right && !this.isAlphanumeric(s[right])) {
        right--;
      }

      // compare characters at left and right pointers
      if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

      left++;
      right--;
    }

    return true;
  }

  isAlphanumeric(char) {
    return /[a-z0-9]/i.test(char);
  }
}

const sol = new Solution();
// Test case 1: "A man, a plan, a canal, Panama!"
// Expected output: true
console.log(sol.isPalindrome("A man, a plan, a canal, Panama!"));

// Test case 2: "race a car"
// Expected output: false
console.log(sol.isPalindrome("race a car"));

// Test case 3: "Was it a car or a cat I saw?"
// Expected output: true
console.log(sol.isPalindrome("Was it a car or a cat I saw?"));

// Test case 4: "Madam, in Eden, I'm Adam."
// Expected output: true
console.log(sol.isPalindrome("Madam, in Eden, I'm Adam."));

// Test case 5: "empty string"
// Expected output: true
console.log(sol.isPalindrome(""));
