/*
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9]
*/

class Solution {
  makeSquares(arr) {
    const n = arr.length;
    const squares = Array(n).fill(0);
    let left = 0;
    let right = n - 1;

    for (let i = n - 1; i >= 0; i--) {
      const leftSquare = arr[left] ** 2;
      const rightQuare = arr[right] ** 2;

      if (leftSquare > rightQuare) {
        squares[i] = leftSquare;
        left++;
      } else {
        squares[i] = rightQuare;
        right--;
      }
    }

    return squares;
  }
}

const sol = new Solution();
console.log(`Squares: ${sol.makeSquares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${sol.makeSquares([-3, -1, 0, 1, 2])}`);
