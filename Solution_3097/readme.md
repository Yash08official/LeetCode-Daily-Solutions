# [3097. Shortest Subarray With OR at Least K II](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii)

## Description

<!-- description:start -->

<p>You are given an array <code>nums</code> of <strong>non-negative</strong> integers and an integer <code>k</code>.</p>

<p>An array is called <strong>special</strong> if the bitwise <code>OR</code> of all of its elements is <strong>at least</strong> <code>k</code>.</p>

<p>Return <em>the length of the <strong>shortest</strong> <strong>special</strong> <strong>non-empty</strong> <span data-keyword="subarray-nonempty">subarray</span> of</em> <code>nums</code>, <em>or return</em> <code>-1</code> <em>if no special subarray exists</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3], k = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p>The subarray <code>[3]</code> has <code>OR</code> value of <code>3</code>. Hence, we return <code>1</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [2,1,8], k = 10</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>The subarray <code>[2,1,8]</code> has <code>OR</code> value of <code>11</code>. Hence, we return <code>3</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2], k = 0</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p>The subarray <code>[1]</code> has <code>OR</code> value of <code>1</code>. Hence, we return <code>1</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= k &lt;= 10<sup>9</sup></code></li>
</ul>

<!-- description:end -->

## Solutions

#### Java

```java
class Solution {
    public int minimumSubarrayLength(int[] nums, int k) {
        int n = nums.length;
        int[] cnt = new int[32];
        int ans = n + 1;
        for (int i = 0, j = 0, s = 0; j < n; ++j) {
            s |= nums[j];
            for (int h = 0; h < 32; ++h) {
                if ((nums[j] >> h & 1) == 1) {
                    ++cnt[h];
                }
            }
            for (; s >= k && i <= j; ++i) {
                ans = Math.min(ans, j - i + 1);
                for (int h = 0; h < 32; ++h) {
                    if ((nums[i] >> h & 1) == 1) {
                        if (--cnt[h] == 0) {
                            s ^= 1 << h;
                        }
                    }
                }
            }
        }
        return ans > n ? -1 : ans;
    }
}
```
