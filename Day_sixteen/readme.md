# [1679. Max Number of K-Sum Pairs](https://leetcode.com/problems/max-number-of-k-sum-pairs)


## Description

<!-- description:start -->

<p>You are given an integer array <code>nums</code> and an integer <code>k</code>.</p>

<p>In one operation, you can pick two numbers from the array whose sum equals <code>k</code> and remove them from the array.</p>

<p>Return <em>the maximum number of operations you can perform on the array</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4], k = 5
<strong>Output:</strong> 2
<strong>Explanation:</strong> Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,1,3,4,3], k = 6
<strong>Output:</strong> 1
<strong>Explanation:</strong> Starting with nums = [3,1,3,4,3]:
- Remove the first two 3&#39;s, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Sorting

We sort $nums$. Then $l$ and $r$ point to the first and last elements of $nums$ respectively, and we compare the sum $s$ of the two integers with $k$.

-   If $s = k$, it means that we have found two integers whose sum is $k$. We increment the answer and then move $l$ and $r$ towards the middle;
-   If $s > k$, then we move the $r$ pointer to the left;
-   If $s < k$, then we move the $l$ pointer to the right;
-   We continue the loop until $l \geq r$.

After the loop ends, we return the answer.

The time complexity is $O(n \times \log n)$, and the space complexity is $O(\log n)$. Here, $n$ is the length of $nums$.

<!-- tabs:start -->

#### Java

```java
class Solution {
    public int maxOperations(int[] nums, int k) {
        Arrays.sort(nums);
        int l = 0, r = nums.length - 1;
        int ans = 0;
        while (l < r) {
            int s = nums[l] + nums[r];
            if (s == k) {
                ++ans;
                ++l;
                --r;
            } else if (s > k) {
                --r;
            } else {
                ++l;
            }
        }
        return ans;
    }
}
```
