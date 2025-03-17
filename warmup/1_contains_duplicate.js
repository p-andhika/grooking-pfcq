/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums= [1, 2, 3, 4]
Output: false  
Explanation: There are no duplicates in the given array.
Example 2:

Input: nums= [1, 2, 3, 1]
Output: true  
Explanation: '1' is repeating.
*/

class Solution {
  containsDuplicate(nums) {
    // brute force solution
    //for (let i = 0; i < nums.length; i++) {
    //  for (let j = i + 1; j < nums.length; j++) {
    //    if (nums[i] == nums[j]) return true;
    //  }
    //}
    //return false;

    // hash set solution
    //const unique_set = new Set();
    //
    //for (let i = 0; i < nums.length; i++) {
    //  if (unique_set.has(nums[i])) return true;
    //
    //  unique_set.add(nums[i]);
    //}
    //
    //return false;

    // sort solution
    const sortedNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length - 1; i++) {
      if (sortedNums[i] == sortedNums[i + 1]) return true;
    }

    return false;
  }
}

const sol = new Solution();
const nums1 = [1, 2, 3, 4];
console.log(sol.containsDuplicate(nums1)); // Expected output: false

const nums2 = [1, 2, 3, 1];
console.log(sol.containsDuplicate(nums2)); // Expected output: true

const nums3 = [];
console.log(sol.containsDuplicate(nums3)); // Expected output: false

const nums4 = [1, 1, 1, 1];
console.log(sol.containsDuplicate(nums4)); // Expected output: true
