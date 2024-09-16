
# [539. Minimum Time Difference](https://leetcode.com/problems/minimum-time-difference)


## Description

<!-- description:start -->

Given a list of 24-hour clock time points in <strong>&quot;HH:MM&quot;</strong> format, return <em>the minimum <b>minutes</b> difference between any two time-points in the list</em>.

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> timePoints = ["23:59","00:00"]
<strong>Output:</strong> 1
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> timePoints = ["00:00","23:59","00:00"]
<strong>Output:</strong> 0
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= timePoints.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>timePoints[i]</code> is in the format <strong>&quot;HH:MM&quot;</strong>.</li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Sorting

We notice that there can be at most $24 \times 60 = 1440$ distinct time points. Therefore, if the length of $timePoints$ exceeds $1440$, it implies there are duplicate time points, and we can return $0$ early.

Next, we iterate through the list of time points and convert it into a list of minutes $nums$. For example, for the time point `13:14`, we convert it into $13 \times 60 + 14$.

Then, we sort the list of minutes in ascending order and append the smallest time $nums[0]$ plus $1440$ to the end of the list. This step is to handle the special case of the difference between the maximum and minimum values.

Finally, we iterate through the list of minutes to find the minimum difference between any two adjacent times.

The time complexity is $O(n \log n)$, and the space complexity is $O(n)$, where $n$ is the number of time points.


#### Java

```java
class Solution {
    public int findMinDifference(List<String> timePoints) {
        if (timePoints.size() > 1440) {
            return 0;
        }
        int n = timePoints.size();
        int[] nums = new int[n + 1];
        for (int i = 0; i < n; ++i) {
            String[] t = timePoints.get(i).split(":");
            nums[i] = Integer.parseInt(t[0]) * 60 + Integer.parseInt(t[1]);
        }
        Arrays.sort(nums, 0, n);
        nums[n] = nums[0] + 1440;
        int ans = 1 << 30;
        for (int i = 1; i <= n; ++i) {
            ans = Math.min(ans, nums[i] - nums[i - 1]);
        }
        return ans;
    }
}
```