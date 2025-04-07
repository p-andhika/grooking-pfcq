/*
Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

Example 1

    Input: arr = [1, 0, 2, 1, 0]
    Output: [0, 0, 1, 1, 2]
    Explanation:
        All 0s are moved to the front, 1s in the middle, and 2s at the end.
        The relative order within each group doesn't matter.

Example 2

    Input: arr= [2, 2, 0, 1, 2, 0]
    Output: [0, 0, 1, 2, 2, 2]
    Explanation:
        All 0s come first, followed by the 1, and then all 2s at the end.
        Sorting is done in-place without using extra space or counting.

*/

class Solution {
  sort(arr) {
    let low = 0;
    let high = arr.length - 1;
    let i = 0;

    while (i <= high) {
      if (arr[i] === 0) {
        [arr[i], arr[low]] = [arr[low], arr[i]];

        i += 1;
        low += 1;
      } else if (arr[i] === 1) {
        i += 1;
      } else {
        [arr[i], arr[high]] = [arr[high], arr[i]];

        high -= 1;
      }
    }

    return arr;
  }
}

const sol = new Solution();
let arr = [1, 0, 2, 1, 0];
arr = sol.sort(arr);
console.log(arr);

arr = [2, 2, 0, 1, 2, 0];
arr = sol.sort(arr);
console.log(arr);
