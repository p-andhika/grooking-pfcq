/*
Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

Example 1:

Input: [4, 1, 2, -1, 1, -3], target=1
Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
Explanation: Both the quadruplets add up to the target.
Example 2:

Input: [2, 0, -1, 1, -2, 2], target=2
Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
Explanation: Both the quadruplets add up to the target.
*/

class Solution {
  searchQuadruplets(arr, target) {
    const quadruplets = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 3; i++) {
      if (i > 0 && arr[i] == arr[i - 1]) continue; // skip duplicate for the 1st number

      for (let j = i + 1; j < arr.length - 2; j++) {
        if (j > i + 1 && arr[j] == arr[j - 1]) continue;

        let left = j + 1;
        let right = arr.length - 1;

        while (left < right) {
          let sum = arr[i] + arr[j] + arr[left] + arr[right];

          if (sum == target) {
            quadruplets.push([arr[i], arr[j], arr[left], arr[right]]);

            while (left < right && arr[left] == arr[left + 1]) left++;
            while (left < right && arr[right] == arr[right - 1]) right--;

            left++;
            right--;
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }

    return quadruplets;
  }
}

const sol = new Solution();
console.log(sol.searchQuadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(sol.searchQuadruplets([2, 0, -1, 1, -2, 2], 2));
