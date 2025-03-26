/*
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: The triplet [-1, 0, 3] has the sum '2' which is closest to the target.

There are two triplets with distance '1' from the target: [-1, 0, 3] & [-1, 2, 3]. Between these two triplets, the correct answer will be [-1, 0, 3] as it has a sum '2' which is less than the sum of the other triplet which is '4'. This is because of the following requirement: 'If there are more than one such triplet, return the sum of the triplet with the smallest sum.'
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.
Example 4:

Input: [0, 0, 1, 1, 2, 6], target=5
Output: 4
Explanation: There are two triplets with distance '1' from target: [1, 1, 2] & [0, 0, 6]. Between these two triplets, the correct answer will be [1, 1, 2] as it has a sum '4' which is less than the sum of the other triplet which is '6'. This is because of the following requirement: 'If there are more than one such triplet, return the sum of the triplet with the smallest sum.'
*/

class Solution {
  searchTriplet(arr, targetSum) {
    // sort the array
    arr.sort((a, b) => a - b);

    let closestSum = Infinity;

    // iterate through the array, fixing one number and finding the best pair
    for (let i = 0; i < arr.length - 2; i++) {
      // skip duplicate to avoid checking the same triplet
      if (i > 0 && arr[i] === arr[i - 1]) continue;

      let left = i + 1;
      let right = arr.length - 1;

      while (left < right) {
        // calculate current sum of the triplet
        const currentSum = arr[i] + arr[left] + arr[right];

        // if the current sum is closer to the target, update 'closestSum'
        if (
          Math.abs(currentSum - targetSum) < Math.abs(closestSum - targetSum)
        ) {
          closestSum = currentSum;
        } else if (
          Math.abs(currentSum - targetSum) === Math.abs(closestSum - targetSum)
        ) {
          closestSum = Math.min(closestSum, currentSum);
        }

        // move left or right pointer based on comparison with the target
        if (currentSum < targetSum) {
          left++;
        } else if (currentSum > targetSum) {
          right--;
        } else {
          return currentSum;
        }
      }
    }

    return closestSum;
  }
}

const sol = new Solution();
console.log(sol.searchTriplet([-1, 0, 2, 3], 2));
console.log(sol.searchTriplet([-3, -1, 1, 2], 1));
console.log(sol.searchTriplet([1, 0, 1, 1], 100));
console.log(sol.searchTriplet([0, 0, 1, 1, 2, 6], 5));
