/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "listen", t = "silent"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Example 3:

Input: s = "hello", t = "world"
Output: false
*/

class Solution {
  isAnagram(s, t) {
    // check if the length of both strings are equal. If not, return false
    if (s.length !== t.length) return false;

    // create object to store the frequency of characters in both string
    let freqMap = {};
    for (let i = 0; i < s.length; i++) {
      // increment the frequency of the character in string s
      freqMap[s[i]] = (freqMap[s[i]] || 0) + 1;

      // increment the frequency of the character in string t
      freqMap[t[i]] = (freqMap[t[i]] || 0) - 1;
    }

    // check if the frequency of all character is 0
    for (let char in freqMap) {
      if (freqMap[char] !== 0) return false;
    }

    return true;
  }
}

var sol = new Solution();

// Test case 1
var s1 = "listen";
var t1 = "silent";
console.log(sol.isAnagram(s1, t1)); // Expected output: true

// Test case 2
var s2 = "hello";
var t2 = "world";
console.log(sol.isAnagram(s2, t2)); // Expected output: false

// Test case 3
var s3 = "anagram";
var t3 = "nagaram";
console.log(sol.isAnagram(s3, t3)); // Expected output: true

// Test case 4
var s4 = "rat";
var t4 = "car";
console.log(sol.isAnagram(s4, t4)); // Expected output: false

// Test case 5
var s5 = "";
var t5 = "";
console.log(sol.isAnagram(s5, t5)); // Expected output: true
