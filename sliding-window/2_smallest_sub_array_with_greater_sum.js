/*
Problem Statement

Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'. Return 0 if no such subarray exists.

Example 1:

Input: arr = [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

Example 2:

Input: arr = [2, 1, 5, 2, 8], S=7
Output: 1 
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Example 3:

Input: arr = [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
*/

class Solution {
  findMinSubArray(s, arr) {
    let windowSum = 0,
      windowStart = 0,
      minLength = Infinity;

    for (let windowEnd = 0; windowEnd < arr.lengh; windowEnd++) {
      windowSum += arr[windowEnd];

      while (windowSum >= s) {
        minLength = Math.min(minLength, windowEnd - windowStart + 1);
        windowSum -= arr[windowStart];
        windowStart += 1;
      }
    }

    if (minLength == Infinity) return 0;

    return minLength;
  }
}

const sol = new Solution();
console.log(
  `Smallest subarray length: ` + sol.findMinSubArray(7, [2, 1, 5, 2, 3, 2]),
);
console.log(
  `Smallest subarray length: ` + sol.findMinSubArray(7, [2, 1, 5, 2, 8]),
);
console.log(
  `Smallest subarray length: ` + sol.findMinSubArray(8, [3, 4, 1, 1, 6]),
);
