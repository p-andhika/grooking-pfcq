/*
Problem Statement

Given an array of positive numbers and a positive number 'k,' find the maximum sum of any contiguous subarray of size 'k'.

Example 1:

Input: arr = [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:

Input: arr = [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
*/

class Solution {
  findMaxSumSubArray(k, arr) {
    let maxSum = 0,
      windowSum = 0,
      windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd]; // add next element

      // slide the window, no need to slide if we've not hit the window size of "k"
      if (windowEnd >= k - 1) {
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= arr[windowStart];
        windowStart += 1;
      }
    }

    return maxSum;
  }
}

const sol = new Solution();
console.log(
  `Maximum sum of a subarray of size K: ` +
    sol.findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2]),
);
console.log(
  `Maximum sum of a subarray of size K: ` +
    sol.findMaxSumSubArray(2, [2, 3, 4, 1, 5]),
);
