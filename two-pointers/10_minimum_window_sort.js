/*
Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

Example 1:

Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
Example 2:

Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
Example 3:

Input: [1, 2, 3]
Output: 0
Explanation: The array is already sorted
Example 4:

Input: [3, 2, 1]
Output: 3
Explanation: The whole array needs to be sorted.
*/

class Solution {
  sort(arr) {
    if (arr.length <= 1) return 0;

    let left = 0;
    let right = arr.length - 1;

    // find the first index from the start where the order is broken
    while (left < arr.length - 1 && arr[left] <= arr[left + 1]) {
      left++;
    }

    // if left reached the end, the array is already sorted
    if (left == arr.length - 1) {
      return 0;
    }

    // find the first index from the end where the order is broken
    while (right > 0 && arr[right] >= arr[right - 1]) {
      right--;
    }

    // find the min max within the initially identified unsorted subarray
    let subarrayMin = Infinity;
    let subarrayMax = -Infinity;

    for (let i = left; i <= right; i++) {
      subarrayMin = Math.min(subarrayMin, arr[i]);
      subarrayMax = Math.max(subarrayMax, arr[i]);
    }

    // expand the right boundary to include any elements less than subarrayMax
    while (right < arr.length - 1 && arr[right + 1] < subarrayMax) {
      right++;
    }

    return right - left + 1;
  }
}

const sol = new Solution();
console.log(sol.sort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(sol.sort([1, 3, 2, 0, -1, 7, 10]));
console.log(sol.sort([1, 2, 3]));
console.log(sol.sort([3, 2, 1]));
