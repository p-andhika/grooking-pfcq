/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs, here are the indices: (0,3), (0,4), (3,4), (2,5).
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array is a 'good pair'.
Example 3:

Input: words = nums = [1,2,3]
Output: 0
Explanation: No number is repeating.
*/

class Solution {
  numGoodPairs(nums) {
    const freqMap = {};
    let pairCount = 0;

    for (const num of nums) {
      if (freqMap[num]) {
        pairCount += freqMap[num];
      }

      freqMap[num] = (freqMap[num] || 0) + 1;
    }

    return pairCount;
  }
}

const sol = new Solution();
let nums1 = [1, 2, 3, 1, 1, 3];
let result1 = sol.numGoodPairs(nums1);
console.log(`Result 1: ${result1} (Expected: 4)`);

let nums2 = [1, 1, 1, 1];
let result2 = sol.numGoodPairs(nums2);
console.log(`Result 2: ${result2} (Expected: 6)`);

let nums3 = [1, 2, 3];
let result3 = sol.numGoodPairs(nums3);
console.log(`Result 3: ${result3} (Expected: 0)`);
