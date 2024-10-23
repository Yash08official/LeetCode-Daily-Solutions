// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var replaceValueInTree = function(root) {
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
