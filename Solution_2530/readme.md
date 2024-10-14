# [2530. Maximal Score After Applying K Operations](https://leetcode.com/problems/maximal-score-after-applying-k-operations)

## Description

<!-- description:start -->

<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> and an integer <code>k</code>. You have a <strong>starting score</strong> of <code>0</code>.</p>

<p>In one <strong>operation</strong>:</p>

<ol>
	<li>choose an index <code>i</code> such that <code>0 &lt;= i &lt; nums.length</code>,</li>
	<li>increase your <strong>score</strong> by <code>nums[i]</code>, and</li>
	<li>replace <code>nums[i]</code> with <code>ceil(nums[i] / 3)</code>.</li>
</ol>

<p>Return <em>the maximum possible <strong>score</strong> you can attain after applying <strong>exactly</strong></em> <code>k</code> <em>operations</em>.</p>

<p>The ceiling function <code>ceil(val)</code> is the least integer greater than or equal to <code>val</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,10,10,10,10], k = 5
<strong>Output:</strong> 50
<strong>Explanation:</strong> Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,10,3,3,3], k = 3
<strong>Output:</strong> 17
<strong>Explanation: </strong>You can do the following operations:
Operation 1: Select i = 1, so nums becomes [1,<strong><u>4</u></strong>,3,3,3]. Your score increases by 10.
Operation 2: Select i = 1, so nums becomes [1,<strong><u>2</u></strong>,3,3,3]. Your score increases by 4.
Operation 3: Select i = 2, so nums becomes [1,1,<u><strong>1</strong></u>,3,3]. Your score increases by 3.
The final score is 10 + 4 + 3 = 17.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length, k &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Priority Queue (Max Heap)

To maximize the sum of scores, we need to select the element with the maximum value at each step. Therefore, we can use a priority queue (max heap) to maintain the element with the maximum value.

At each step, we take out the element with the maximum value $v$ from the priority queue, add $v$ to the answer, and replace $v$ with $\lceil \frac{v}{3} \rceil$, and then add it to the priority queue. After repeating this process $k$ times, we return the answer.

The time complexity is $O(n + k \times \log n)$, and the space complexity is $O(n)$ or $O(1)$. Here, $n$ is the length of the array $nums$.

### Solution

#### Java

```java
class Solution {
    public long maxKelements(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        int n= nums.length;
        for(int i=0;i<n;i++){
            pq.offer(nums[i]);
        }
        long score=0;
        while(k>0){
            int val = pq.poll();
            score+=val;
            pq.offer((int)Math.ceil(val/3.0));
            k--;
        }
        return score;
    }
}
```

#### JavaScript

```js
var maxKelements = function (nums, k) {
  // Use a max-heap (priority queue) to store elements in descending order.
  let maxHeap = new MaxPriorityQueue(); // Assuming you are using a priority queue library.

  // Add all elements from the 'nums' array to the max-heap.
  for (let i = 0; i < nums.length; i++) {
    maxHeap.enqueue(nums[i]); // Add each element to the max-heap.
  }

  let score = 0;

  // Repeat the process 'k' times.
  while (k > 0) {
    // Dequeue the maximum element from the heap.
    let val = maxHeap.dequeue().element;

    // Add the maximum value to the score.
    score += val;

    // Push back the element to the heap with its value divided by 3, rounded up.
    maxHeap.enqueue(Math.ceil(val / 3));

    // Decrease 'k' since one operation has been performed.
    k--;
  }

  // Return the total score after 'k' operations.
  return score;
};
```
