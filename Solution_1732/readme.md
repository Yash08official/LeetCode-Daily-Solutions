
<!-- problem:start -->

# [1732. Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude)



## Description

<!-- description:start -->

<p>There is a biker going on a road trip. The road trip consists of <code>n + 1</code> points at different altitudes. The biker starts his trip on point <code>0</code> with altitude equal <code>0</code>.</p>

<p>You are given an integer array <code>gain</code> of length <code>n</code> where <code>gain[i]</code> is the <strong>net gain in altitude</strong> between points <code>i</code>​​​​​​ and <code>i + 1</code> for all (<code>0 &lt;= i &lt; n)</code>. Return <em>the <strong>highest altitude</strong> of a point.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> gain = [-5,1,5,0,-7]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> gain = [-4,-3,-2,-1,4,3,2]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == gain.length</code></li>
	<li><code>1 &lt;= n &lt;= 100</code></li>
	<li><code>-100 &lt;= gain[i] &lt;= 100</code></li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Prefix Sum (Difference Array)

We assume the altitude of each point is $h_i$. Since $gain[i]$ represents the altitude difference between the $i$th point and the $(i + 1)$th point, we have $gain[i] = h_{i + 1} - h_i$. Therefore:

$$
\sum_{i = 0}^{n-1} gain[i] = h_1 - h_0 + h_2 - h_1 + \cdots + h_n - h_{n - 1} = h_n - h_0 = h_n
$$

which implies:

$$
h_{i+1} = \sum_{j = 0}^{i} gain[j]
$$

We can see that the altitude of each point can be calculated through the prefix sum. Therefore, we only need to traverse the array once, find the maximum value of the prefix sum, which is the highest altitude.

> In fact, the $gain$ array in the problem is a difference array. The prefix sum of the difference array gives the original altitude array. Then find the maximum value of the original altitude array.

The time complexity is $O(n)$, and the space complexity is $O(1)$. Here, $n$ is the length of the array `gain`.


#### Java

```java
class Solution {
    public int largestAltitude(int[] gain) {
        int ans = 0, h = 0;
        for (int v : gain) {
            h += v;
            ans = Math.max(ans, h);
        }
        return ans;
    }
}
```


#### JavaScript

```js
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let ans = 0;
    let h = 0;
    for (const v of gain) {
        h += v;
        ans = Math.max(ans, h);
    }
    return ans;
};
```
