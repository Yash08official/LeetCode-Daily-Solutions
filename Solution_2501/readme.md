# [2501. Longest Square Streak in an Array](https://leetcode.com/problems/longest-square-streak-in-an-array)

## Description

<!-- description:start -->

<p>You are given an integer array <code>nums</code>. A subsequence of <code>nums</code> is called a <strong>square streak</strong> if:</p>

<ul>
	<li>The length of the subsequence is at least <code>2</code>, and</li>
	<li><strong>after</strong> sorting the subsequence, each element (except the first element) is the <strong>square</strong> of the previous number.</li>
</ul>

<p>Return<em> the length of the <strong>longest square streak</strong> in </em><code>nums</code><em>, or return </em><code>-1</code><em> if there is no <strong>square streak</strong>.</em></p>

<p>A <strong>subsequence</strong> is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,3,6,16,8,2]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Choose the subsequence [4,16,2]. After sorting it, it becomes [2,4,16].
- 4 = 2 * 2.
- 16 = 4 * 4.
Therefore, [4,16,2] is a square streak.
It can be shown that every subsequence of length 4 is not a square streak.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,3,5,6,7]
<strong>Output:</strong> -1
<strong>Explanation:</strong> There is no square streak in nums so return -1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>2 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>

<!-- description:end -->

## Solutions

#### Java

```java
class Solution {
    public int longestSquareStreak(int[] nums) {

        int max = -1;  // Initialize max to -1 to track the longest square streak of length >= 2

        Map<Integer, Integer> Streaks = new HashMap<>();  // Map to store streak lengths for each number
        Arrays.sort(nums);  // Sort the array to process numbers in ascending order

        // Iterate over each number in the sorted array
        for (int i : nums) {

            int root = (int)Math.sqrt(i);  // Calculate the integer square root of the current number

            // Check if the current number is a perfect square and its root has a streak
            if (root * root == i && Streaks.containsKey(root)) {
                // If true, update the streak for current number by incrementing the streak of its root
                Streaks.put(i, Streaks.get(root) + 1);

                // Update max if this streak is the longest found so far
                max = Math.max(Streaks.get(i), max);
            } else {
                // If the current number starts a new streak, set its streak length to 1
                Streaks.put(i, 1);
            }
        }

        // Return the longest streak found if it's 2 or more, otherwise -1
        return max;
    }
}
```

#### JavaScript

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  let max = -1; // Initialize max to -1 to track the longest square streak of length >= 2
  const Streaks = new Map(); // Map to store streak lengths for each number

  nums.sort((a, b) => a - b); // Sort the array in ascending order

  // Iterate over each number in the sorted array
  for (const num of nums) {
    const root = Math.floor(Math.sqrt(num)); // Calculate the integer square root of the current number

    // Check if the current number is a perfect square and its root has a streak
    if (root * root === num && Streaks.has(root)) {
      // If true, update the streak for current number by incrementing the streak of its root
      Streaks.set(num, Streaks.get(root) + 1);

      // Update max if this streak is the longest found so far
      max = Math.max(Streaks.get(num), max);
    } else {
      // If the current number starts a new streak, set its streak length to 1
      Streaks.set(num, 1);
    }
  }

  // Return the longest streak found if it's 2 or more, otherwise -1
  return max;
};
```
