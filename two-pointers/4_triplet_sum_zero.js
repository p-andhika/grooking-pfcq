/*
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.
*/

class Solution {
  searchTriplets(arr) {
    arr.sort((a, b) => a - b);
    const triplets = [];

    for (let i = 0; i < arr.length - 2; i++) {
      if (i > 0 && arr[i] == arr[i - 1]) continue; // skip duplicate

      let left = i + 1,
        right = arr.length - 1;

      while (left < right) {
        let sum = arr[i] + arr[left] + arr[right];

        if (sum == 0) {
          triplets.push([arr[i], arr[left], arr[right]]);

          // skip duplicate value for left & right
          while (left < right && arr[left] == arr[left + 1]) left++;
          while (left < right && arr[right] == arr[right - 1]) right--;

          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }

    return triplets;
  }
}

const sol = new Solution();
console.log(sol.searchTriplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(sol.searchTriplets([-5, 2, -1, -2, 3]));
