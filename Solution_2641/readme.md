# [2641. Cousins in Binary Tree II](https://leetcode.com/problems/cousins-in-binary-tree-ii)

## Description

<!-- description:start -->

<p>Given the <code>root</code> of a binary tree, replace the value of each node in the tree with the <strong>sum of all its cousins&#39; values</strong>.</p>

<p>Two nodes of a binary tree are <strong>cousins</strong> if they have the same depth with different parents.</p>

<p>Return <em>the </em><code>root</code><em> of the modified tree</em>.</p>

<p><strong>Note</strong> that the depth of a node is the number of edges in the path from the root node to it.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2600-2699/2641.Cousins%20in%20Binary%20Tree%20II/images/example11.png" style="width: 571px; height: 151px;" />
<pre>
<strong>Input:</strong> root = [5,4,9,1,10,null,7]
<strong>Output:</strong> [0,0,0,7,7,null,11]
<strong>Explanation:</strong> The diagram above shows the initial binary tree and the binary tree after changing the value of each node.
- Node with value 5 does not have any cousins so its sum is 0.
- Node with value 4 does not have any cousins so its sum is 0.
- Node with value 9 does not have any cousins so its sum is 0.
- Node with value 1 has a cousin with value 7 so its sum is 7.
- Node with value 10 has a cousin with value 7 so its sum is 7.
- Node with value 7 has cousins with values 1 and 10 so its sum is 11.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2600-2699/2641.Cousins%20in%20Binary%20Tree%20II/images/diagram33.png" style="width: 481px; height: 91px;" />
<pre>
<strong>Input:</strong> root = [3,1,2]
<strong>Output:</strong> [0,0,0]
<strong>Explanation:</strong> The diagram above shows the initial binary tree and the binary tree after changing the value of each node.
- Node with value 3 does not have any cousins so its sum is 0.
- Node with value 1 does not have any cousins so its sum is 0.
- Node with value 2 does not have any cousins so its sum is 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>5</sup>]</code>.</li>
	<li><code>1 &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
</ul>

<!-- description:end -->

## Solutions

#### Java

```java
class Solution {
    private List<Integer> s = new ArrayList<>();

    public TreeNode replaceValueInTree(TreeNode root) {
        dfs1(root, 0);
        root.val = 0;
        dfs2(root, 0);
        return root;
    }

    private void dfs1(TreeNode root, int depth) {
        if (root == null) {
            return;
        }
        if (s.size() <= depth) {
            s.add(0);
        }
        s.set(depth, s.get(depth) + root.val);
        dfs1(root.left, depth + 1);
        dfs1(root.right, depth + 1);
    }

    private void dfs2(TreeNode root, int depth) {
        int l = root.left == null ? 0 : root.left.val;
        int r = root.right == null ? 0 : root.right.val;
        int sub = l + r;
        ++depth;
        if (root.left != null) {
            root.left.val = s.get(depth) - sub;
            dfs2(root.left, depth);
        }
        if (root.right != null) {
            root.right.val = s.get(depth) - sub;
            dfs2(root.right, depth);
        }
    }
}
```

#### JavaScript

```js
// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var replaceValueInTree = function (root) {
  // List to store the sum of values at each depth level
  const sums = [];

  // First DFS to compute the sums at each depth
  function dfs1(node, depth) {
    if (!node) return; // Base case: if the node is null, return

    // Ensure there's a sum entry for the current depth
    if (sums.length <= depth) {
      sums.push(0);
    }
    // Add the current node's value to the corresponding depth sum
    sums[depth] += node.val;

    // Recursively visit left and right children
    dfs1(node.left, depth + 1);
    dfs1(node.right, depth + 1);
  }

  // Second DFS to replace values based on computed sums
  function dfs2(node, depth) {
    if (!node) return; // Base case: if the node is null, return

    // Get the values of the left and right children (or 0 if null)
    const leftValue = node.left ? node.left.val : 0;
    const rightValue = node.right ? node.right.val : 0;

    // Calculate the sum of the current node's children values
    const childrenSum = leftValue + rightValue;

    depth++; // Move to the next depth level

    // Update the left child's value if it exists
    if (node.left) {
      node.left.val = sums[depth] - childrenSum; // Set to sum at next depth minus current children's sum
      dfs2(node.left, depth); // Recursively process left child
    }
    // Update the right child's value if it exists
    if (node.right) {
      node.right.val = sums[depth] - childrenSum; // Same as above for right child
      dfs2(node.right, depth); // Recursively process right child
    }
  }

  // Call the first DFS to fill the sums array
  dfs1(root, 0);
  // Set the root value to 0
  root.val = 0;
  // Call the second DFS to replace values
  dfs2(root, 0);

  return root; // Return the modified tree
};
```
