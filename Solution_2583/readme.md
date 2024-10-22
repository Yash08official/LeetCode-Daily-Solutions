# [2583. Kth Largest Sum in a Binary Tree](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree)

## Description

<!-- description:start -->

<p>You are given the <code>root</code> of a binary tree and a positive integer <code>k</code>.</p>

<p>The <strong>level sum</strong> in the tree is the sum of the values of the nodes that are on the <strong>same</strong> level.</p>

<p>Return<em> the </em><code>k<sup>th</sup></code><em> <strong>largest</strong> level sum in the tree (not necessarily distinct)</em>. If there are fewer than <code>k</code> levels in the tree, return <code>-1</code>.</p>

<p><strong>Note</strong> that two nodes are on the same level if they have the same distance from the root.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2500-2599/2583.Kth%20Largest%20Sum%20in%20a%20Binary%20Tree/images/binaryytreeedrawio-2.png" style="width: 301px; height: 284px;" />
<pre>
<strong>Input:</strong> root = [5,8,9,2,1,3,7,4,6], k = 2
<strong>Output:</strong> 13
<strong>Explanation:</strong> The level sums are the following:
- Level 1: 5.
- Level 2: 8 + 9 = 17.
- Level 3: 2 + 1 + 3 + 7 = 13.
- Level 4: 4 + 6 = 10.
The 2<sup>nd</sup> largest level sum is 13.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2500-2599/2583.Kth%20Largest%20Sum%20in%20a%20Binary%20Tree/images/treedrawio-3.png" style="width: 181px; height: 181px;" />
<pre>
<strong>Input:</strong> root = [1,2,null,3], k = 1
<strong>Output:</strong> 3
<strong>Explanation:</strong> The largest level sum is 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is <code>n</code>.</li>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= Node.val &lt;= 10<sup>6</sup></code></li>
	<li><code>1 &lt;= k &lt;= n</code></li>
</ul>

<!-- description:end -->

## Solutions

#### Java

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public long kthLargestLevelSum(TreeNode root, int k) {
        // Min-Heap to store the k largest sums
        PriorityQueue<Long> pq = new PriorityQueue<>();

        // Queue for level order traversal (BFS)
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);

        // Perform BFS to calculate level sums
        while (!q.isEmpty()) {
            long sum = 0;
            int size = q.size();

            // Calculate the sum of the current level
            for (int i = 0; i < size; i++) {
                TreeNode curr = q.remove();
                sum += curr.val;

                // Add left and right children to the queue
                if (curr.left != null) {
                    q.add(curr.left);
                }
                if (curr.right != null) {
                    q.add(curr.right);
                }
            }

            // Maintain only k largest sums in the priority queue
            if (pq.size() < k) {
                pq.add(sum); // Add if we haven't found k sums yet
            } else if (pq.peek() < sum) {
                pq.poll(); // Remove the smallest sum in the heap
                pq.add(sum); // Add the new larger sum
            }
        }

        // If we don't have k sums, return -1
        if (pq.size() < k) {
            return -1;
        }

        // Return the k-th largest sum (the root of the min-heap)
        return pq.peek();
    }
}
```

#### JavaScript

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  // Min-Heap to store the k largest sums
  let pq = new MinPriorityQueue({ priority: (x) => x });

  // Queue for level order traversal (BFS)
  let q = [];
  q.push(root);

  // Perform BFS to calculate level sums
  while (q.length > 0) {
    let sum = 0;
    let size = q.length;

    // Calculate the sum of the current level
    for (let i = 0; i < size; i++) {
      let curr = q.shift(); // Dequeue
      sum += curr.val;

      // Add left and right children to the queue
      if (curr.left !== null) {
        q.push(curr.left);
      }
      if (curr.right !== null) {
        q.push(curr.right);
      }
    }

    // Maintain only k largest sums in the priority queue
    if (pq.size() < k) {
      pq.enqueue(sum); // Add if we haven't found k sums yet
    } else if (pq.front().element < sum) {
      pq.dequeue(); // Remove the smallest sum in the heap
      pq.enqueue(sum); // Add the new larger sum
    }
  }

  // If we don't have k sums, return -1
  if (pq.size() < k) {
    return -1;
  }

  // Return the k-th largest sum (the root of the min-heap)
  return pq.front().element;
};
```
