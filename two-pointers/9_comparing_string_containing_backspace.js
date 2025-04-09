/*
Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

Example 1:

Input: str1="xy#z", str2="xzz#"
Output: true
Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
Example 2:

Input: str1="xy#z", str2="xyz#"
Output: false
Explanation: After applying backspaces the strings become "xz" and "xy" respectively.
Example 3:

Input: str1="xp#", str2="xyz##"
Output: true
Explanation: After applying backspaces the strings become "x" and "x" respectively.
In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.
Example 4:

Input: str1="xywrrmp", str2="xywrrmu#p"
Output: true
Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.
*/

class Solution {
  // getFinalString(str) {
  //   const stack = [];
  //
  //   for (let char of str) {
  //     if (char == "#") {
  //       if (stack.length > 0) {
  //         stack.pop();
  //       }
  //     } else {
  //       stack.push(char);
  //     }
  //   }
  //
  //   return stack.join("");
  // }
  //
  // compare(str1, str2) {
  //   const finalString1 = this.getFinalString(str1);
  //   const finalString2 = this.getFinalString(str2);
  //
  //   return finalString1 == finalString2;
  // }

  // other solution
  getValidCharIndex(str, index) {
    let backspaceCount = 0;

    // skip char and handle backspaces
    while (index >= 0) {
      if (str[index] === "#") {
        // count backspace
        backspaceCount++;
      } else if (backspaceCount > 0) {
        // skip this char because of a backspace
        backspaceCount--;
      } else {
        // valid char found
        break;
      }

      index--;
    }

    return index;
  }

  compare(str1, str2) {
    // start from  the end of both strings
    let pointer1 = str1.length - 1;
    let pointer2 = str2.length - 1;

    while (pointer1 >= 0 || pointer2 >= 0) {
      // find next valid char in each string
      pointer1 = this.getValidCharIndex(str1, pointer1);
      pointer2 = this.getValidCharIndex(str2, pointer2);

      // if one of string is exhausted
      if (pointer1 >= 0 !== pointer2 >= 0) {
        return false;
      }

      // if both strings are exhausted, they're equal
      if (pointer1 < 0 && pointer2 < 0) {
        return true;
      }

      // if char don't match
      if (str1[pointer1] !== str2[pointer2]) {
        return false;
      }

      // move to next char
      pointer1--;
      pointer2--;
    }

    return true;
  }
}

const sol = new Solution();
console.log(sol.compare("xy#z", "xzz#"));
console.log(sol.compare("xy#z", "xyz#"));
console.log(sol.compare("xp#", "xyz##"));
console.log(sol.compare("xywrrmp", "xywrrmu#p"));
