/*
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

Example 1:

Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
Example 2:

Input: [-1, 4, 2, 1, 3], target=5 
Output: 4
Explanation: There are four triplets whose sum is less than the target: 
[-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
*/

class Solution {
  searchTriplets(arr, target) {
    // if the array has fewer than 3 elements, no triplets are possible
    if (arr.length < 3) return 0;

    // sort the array to apply two-pointer technique
    arr.sort((a, b) => a - b);

    let count = 0;

    // iterate through the array and find pairs for each arr[i]
    for (let i = 0; i < arr.length - 2; i++) {
      let j = i + 1;
      let k = arr.length - 1;

      while (j < k) {
        // check if the sum of arr[i], arr[j] & arr[k] is less than target
        const sum = arr[i] + arr[j] + arr[k];

        if (sum < target) {
          count += k - j;
          j++;
        } else {
          k--;
        }
      }
    }

    return count;
  }
}

const sol = new Solution();
console.log(sol.searchTriplets([-1, 0, 2, 3], 3));
console.log(sol.searchTriplets([-1, 4, 2, 1, 3], 5));
