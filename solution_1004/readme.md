# 1004. Max Consecutive Ones III

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

```
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
```

Example 2:

```
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
```

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length





- Start with DFS thought, but realize redundant calculations: 
    - we never need to flip 2 indexes [A], [C] from 0 -> 1, if there is a [B] in middle that is 0 too
    - the flipped k zeroes must be consecutive too
- we can utilize two pointers to establish a window that captures k zeroes
    - always expend right pointer; if seeing an zero, k--
        - note: `len = right - left + 1` is the ongoing max length
    - when k < 0 (too many zeros), we need to slide the left side of the window to make sure:
        - keep window len 
        - potentially do k++ when A[left]==0
- goal: matain a max size of the window, until right  == n
- return (right - left). at this moment, right == n, so no need to (right - left + 1)


### Solution :

```
class Solution {
    
    public int longestOnes(int[] A, int k) {
        int left = 0, right = 0, n = A.length;
        while (right < n) {
            if (A[right++] == 0) k--;
            if (k < 0) {
                if (A[left] == 0) k++;
                left++;
            }
        }
        return right - left; // at the end, right == n
    }
    
}
```