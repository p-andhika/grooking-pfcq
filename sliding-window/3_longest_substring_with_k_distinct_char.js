/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.

Example 1:

Input: String="araaci", K=2  
Output: 4  
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:

Input: String="araaci", K=1  
Output: 2  
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 3:

Input: String="cbbebi", K=3  
Output: 5  
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

class Solution {
  findLength(str, k) {
    let maxLength = 0;
    let windowStart = 0;
    const charFreq = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];

      if (!(rightChar in charFreq)) {
        charFreq[rightChar] = 0;
      }

      charFreq[rightChar]++;

      // shrink the window until no more than 'k' distinct characters
      while (Object.keys(charFreq).length > k) {
        const leftChar = str[windowStart];

        charFreq[leftChar]--;

        if (charFreq[leftChar] == 0) {
          delete charFreq[leftChar];
        }

        windowStart += 1;
      }

      // update max length
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
  }
}

const sol = new Solution();
console.log(`Length of the longest substring: ` + sol.findLength("araaci", 2));
console.log(`Length of the longest substring: ` + sol.findLength("araaci", 1));
console.log(`Length of the longest substring: ` + sol.findLength("cbbebi", 3));
