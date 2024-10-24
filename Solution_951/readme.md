# [951. Flip Equivalent Binary Trees](https://leetcode.com/problems/flip-equivalent-binary-trees)

## Description

<!-- description:start -->

<p>For a binary tree <strong>T</strong>, we can define a <strong>flip operation</strong> as follows: choose any node, and swap the left and right child subtrees.</p>

<p>A binary tree <strong>X</strong>&nbsp;is <em>flip equivalent</em> to a binary tree <strong>Y</strong> if and only if we can make <strong>X</strong> equal to <strong>Y</strong> after some number of flip operations.</p>

<p>Given the roots of two binary trees <code>root1</code> and <code>root2</code>, return <code>true</code> if the two trees are flip equivalent or <code>false</code> otherwise.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="Flipped Trees Diagram" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0951.Flip%20Equivalent%20Binary%20Trees/images/tree_ex.png" style="width: 500px; height: 220px;" />
<pre>
<strong>Input:</strong> root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
<strong>Output:</strong> true
<strong>Explanation: </strong>We flipped at nodes with values 1, 3, and 5.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root1 = [], root2 = []
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> root1 = [], root2 = [1]
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in each tree is in the range <code>[0, 100]</code>.</li>
	<li>Each tree will have <strong>unique node values</strong> in the range <code>[0, 99]</code>.</li>
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
    public boolean flipEquiv(TreeNode root1, TreeNode root2) {
        return dfs(root1, root2);
    }

    private boolean dfs(TreeNode root1, TreeNode root2) {
        if (root1 == root2 || (root1 == null && root2 == null)) {
            return true;
        }
        if (root1 == null || root2 == null || root1.val != root2.val) {
            return false;
        }
        return (dfs(root1.left, root2.left) && dfs(root1.right, root2.right))
            || (dfs(root1.left, root2.right) && dfs(root1.right, root2.left));
    }
}
```

#### JavaScript

```js
var flipEquiv = function (root1, root2) {
  // Helper function for recursion to check flip equivalence
  const dfs = (root1, root2) => {
    // Base case: If both nodes are the same (either both null or the same node), return true
    if (root1 === root2 || (root1 === null && root2 === null)) {
      return true;
    }

    // If one node is null or their values are different, return false
    if (root1 === null || root2 === null || root1.val !== root2.val) {
      return false;
    }

    // Recursively check two cases:
    // 1. Compare the left child of root1 with the left child of root2 and
    //    the right child of root1 with the right child of root2.
    // 2. Compare the left child of root1 with the right child of root2 and
    //    the right child of root1 with the left child of root2.
    return (
      (dfs(root1.left, root2.left) && dfs(root1.right, root2.right)) ||
      (dfs(root1.left, root2.right) && dfs(root1.right, root2.left))
    );
  };

  // Call the helper function with the root nodes
  return dfs(root1, root2);
};
```
