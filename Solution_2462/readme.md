# [2462. Total Cost to Hire K Workers](https://leetcode.com/problems/total-cost-to-hire-k-workers)



## Description

<!-- description:start -->

<p>You are given a <strong>0-indexed</strong> integer array <code>costs</code> where <code>costs[i]</code> is the cost of hiring the <code>i<sup>th</sup></code> worker.</p>

<p>You are also given two integers <code>k</code> and <code>candidates</code>. We want to hire exactly <code>k</code> workers according to the following rules:</p>

<ul>
	<li>You will run <code>k</code> sessions and hire exactly one worker in each session.</li>
	<li>In each hiring session, choose the worker with the lowest cost from either the first <code>candidates</code> workers or the last <code>candidates</code> workers. Break the tie by the smallest index.
	<ul>
		<li>For example, if <code>costs = [3,2,7,7,1,2]</code> and <code>candidates = 2</code>, then in the first hiring session, we will choose the <code>4<sup>th</sup></code> worker because they have the lowest cost <code>[<u>3,2</u>,7,7,<u><strong>1</strong>,2</u>]</code>.</li>
		<li>In the second hiring session, we will choose <code>1<sup>st</sup></code> worker because they have the same lowest cost as <code>4<sup>th</sup></code> worker but they have the smallest index <code>[<u>3,<strong>2</strong></u>,7,<u>7,2</u>]</code>. Please note that the indexing may be changed in the process.</li>
	</ul>
	</li>
	<li>If there are fewer than candidates workers remaining, choose the worker with the lowest cost among them. Break the tie by the smallest index.</li>
	<li>A worker can only be chosen once.</li>
</ul>

<p>Return <em>the total cost to hire exactly </em><code>k</code><em> workers.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4
<strong>Output:</strong> 11
<strong>Explanation:</strong> We hire 3 workers in total. The total cost is initially 0.
- In the first hiring round we choose the worker from [<u>17,12,10,2</u>,7,<u>2,11,20,8</u>]. The lowest cost is 2, and we break the tie by the smallest index, which is 3. The total cost = 0 + 2 = 2.
- In the second hiring round we choose the worker from [<u>17,12,10,7</u>,<u>2,11,20,8</u>]. The lowest cost is 2 (index 4). The total cost = 2 + 2 = 4.
- In the third hiring round we choose the worker from [<u>17,12,10,7,11,20,8</u>]. The lowest cost is 7 (index 3). The total cost = 4 + 7 = 11. Notice that the worker with index 3 was common in the first and last four workers.
The total hiring cost is 11.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> costs = [1,2,4,1], k = 3, candidates = 3
<strong>Output:</strong> 4
<strong>Explanation:</strong> We hire 3 workers in total. The total cost is initially 0.
- In the first hiring round we choose the worker from [<u>1,2,4,1</u>]. The lowest cost is 1, and we break the tie by the smallest index, which is 0. The total cost = 0 + 1 = 1. Notice that workers with index 1 and 2 are common in the first and last 3 workers.
- In the second hiring round we choose the worker from [<u>2,4,1</u>]. The lowest cost is 1 (index 2). The total cost = 1 + 1 = 2.
- In the third hiring round there are less than three candidates. We choose the worker from the remaining workers [<u>2,4</u>]. The lowest cost is 2 (index 0). The total cost = 2 + 2 = 4.
The total hiring cost is 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= costs.length &lt;= 10<sup>5 </sup></code></li>
	<li><code>1 &lt;= costs[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= k, candidates &lt;= costs.length</code></li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Priority Queue (Min Heap)

First, we check if $candidates \times 2$ is greater than or equal to $n$. If it is, we directly return the sum of the costs of the first $k$ smallest workers.

Otherwise, we use a min heap $pq$ to maintain the costs of the first $candidates$ workers and the last $candidates$ workers.

We first add the costs and corresponding indices of the first $candidates$ workers to the min heap $pq$, and then add the costs and corresponding indices of the last $candidates$ workers to the min heap $pq$. We use two pointers $l$ and $r$ to point to the indices of the front and back candidates, initially $l = candidates$, $r = n - candidates - 1$.

Then we perform $k$ iterations, each time taking the worker with the smallest cost from the min heap $pq$ and adding its cost to the answer. If $l > r$, it means that all the front and back candidates have been selected, and we skip directly. Otherwise, if the index of the current worker is less than $l$, it means it is a worker from the front, we add the cost and index of the $l$-th worker to the min heap $pq$, and then increment $l$; otherwise, we add the cost and index of the $r$-th worker to the min heap $pq$, and then decrement $r$.

After the loop ends, we return the answer.

The time complexity is $O(n \times \log n)$, and the space complexity is $O(n)$. Where $n$ is the length of the array $costs$.

#### Java

```java
class Solution {
    public long totalCost(int[] costs, int k, int candidates) {
        int n = costs.length;
        long ans = 0;
        if (candidates * 2 >= n) {
            Arrays.sort(costs);
            for (int i = 0; i < k; ++i) {
                ans += costs[i];
            }
            return ans;
        }
        PriorityQueue<int[]> pq
            = new PriorityQueue<>((a, b) -> a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
        for (int i = 0; i < candidates; ++i) {
            pq.offer(new int[] {costs[i], i});
            pq.offer(new int[] {costs[n - i - 1], n - i - 1});
        }
        int l = candidates, r = n - candidates - 1;
        while (k-- > 0) {
            var p = pq.poll();
            ans += p[0];
            if (l > r) {
                continue;
            }
            if (p[1] < l) {
                pq.offer(new int[] {costs[l], l++});
            } else {
                pq.offer(new int[] {costs[r], r--});
            }
        }
        return ans;
    }
}
```

### JavaScript

```js
/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
  let n = costs.length;
  let ans = 0;
  if (candidates * 2 >= n) {
    costs.sort((a, b) => a - b);
    for (let i = 0; i < k; ++i) {
      ans += costs[i];
    }
    return ans;
  }
  let pq = [];
  for (let i = 0; i < candidates; ++i) {
    pq.push([costs[i], i]);
    pq.push([costs[n - i - 1], n - i - 1]);
  }
  pq.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  let l = candidates,
    r = n - candidates - 1;
  while (k-- > 0) {
    let p = pq.shift();
    ans += p[0];
    if (l > r) {
      continue;
    }
    if (p[1] < l) {
      pq.push([costs[l], l++]);
    } else {
      pq.push([costs[r], r--]);
    }
    pq.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  }
  return ans;
};
```
