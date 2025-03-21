/*
Given an array of sorted numbers, move all non-duplicate number instances at the beginning of the array in-place. The non-duplicate numbers should be sorted and you should not use any extra space so that the solution has constant space complexity i.e.,

.

Move all the unique number instances at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after moving element will be [2, 3, 6, 9].

Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after moving elements will be [2, 11].
*/

class Solution {
  moveElements(arr) {
    let writeIndex = 1;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1]) {
        arr[writeIndex] = arr[i];
        writeIndex += 1;
      }
    }

    return writeIndex;
  }
}

// Create an instance of the Solution class.
const sol = new Solution();

// Test the 'moveElements' method with two different arrays and print the results.
console.log(sol.moveElements([2, 3, 3, 3, 6, 9, 9])); // Output: 4 (modified array: [2, 3, 6, 9, 6, 9, 9])
console.log(sol.moveElements([2, 2, 2, 11])); // Output: 2 (modified array: [2, 11, 2, 11])
