# [1671. Minimum Number of Removals to Make Mountain Array](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array)

## Description

<!-- description:start -->

<p>You may recall that an array <code>arr</code> is a <strong>mountain array</strong> if and only if:</p>

<ul>
	<li><code>arr.length &gt;= 3</code></li>
	<li>There exists some index <code>i</code> (<strong>0-indexed</strong>) with <code>0 &lt; i &lt; arr.length - 1</code> such that:
	<ul>
		<li><code>arr[0] &lt; arr[1] &lt; ... &lt; arr[i - 1] &lt; arr[i]</code></li>
		<li><code>arr[i] &gt; arr[i + 1] &gt; ... &gt; arr[arr.length - 1]</code></li>
	</ul>
	</li>
</ul>

<p>Given an integer array <code>nums</code>​​​, return <em>the <strong>minimum</strong> number of elements to remove to make </em><code>nums<em>​​​</em></code><em> </em><em>a <strong>mountain array</strong>.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The array itself is a mountain array so we do not need to remove any elements.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,1,1,5,6,2,3,1]
<strong>Output:</strong> 3
<strong>Explanation:</strong> One solution is to remove the elements at indices 0, 1, and 5, making the array nums = [1,5,6,3,1].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li>It is guaranteed that you can make a mountain array out of <code>nums</code>.</li>
</ul>

<!-- description:end -->

## Solutions

#### Java

```java
class Solution {
    public int minimumMountainRemovals(int[] nums) {
        int n = nums.length;
        int[] left = new int[n];
        int[] right = new int[n];
        Arrays.fill(left, 1);
        Arrays.fill(right, 1);
        for (int i = 1; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (nums[i] > nums[j]) {
                    left[i] = Math.max(left[i], left[j] + 1);
                }
            }
        }
        for (int i = n - 2; i >= 0; --i) {
            for (int j = i + 1; j < n; ++j) {
                if (nums[i] > nums[j]) {
                    right[i] = Math.max(right[i], right[j] + 1);
                }
            }
        }
        int ans = 0;
        for (int i = 0; i < n; ++i) {
            if (left[i] > 1 && right[i] > 1) {
                ans = Math.max(ans, left[i] + right[i] - 1);
            }
        }
        return n - ans;
    }
}
```

#### JavaScript

```js
var minimumMountainRemovals = function (nums) {
  let n = nums.length;

  // Arrays to store the length of the longest increasing subsequence (LIS)
  // up to each index from the start (left) and longest decreasing subsequence (LDS)
  // from each index to the end (right).
  let left = new Array(n).fill(1);
  let right = new Array(n).fill(1);

  // Calculate LIS for each element in 'nums' up to each index i
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // If nums[i] is greater than nums[j], we can extend the subsequence at j to i
      if (nums[i] > nums[j]) {
        left[i] = Math.max(left[i], left[j] + 1);
      }
    }
  }

  // Calculate LDS for each element in 'nums' starting from each index i
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      // If nums[i] is greater than nums[j], we can extend the subsequence at j to i
      if (nums[i] > nums[j]) {
        right[i] = Math.max(right[i], right[j] + 1);
      }
    }
  }

  let ans = 0;

  // Find the maximum mountain array length
  for (let i = 0; i < n; i++) {
    // Only consider elements that can be valid peaks (both LIS and LDS > 1)
    if (left[i] > 1 && right[i] > 1) {
      // Calculate the length of the mountain centered at i
      ans = Math.max(ans, left[i] + right[i] - 1);
    }
  }

  // Minimum removals needed = total length of array - longest mountain length
  return n - ans;
};
```
