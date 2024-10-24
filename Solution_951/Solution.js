var flipEquiv = function(root1, root2) {
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
        return (dfs(root1.left, root2.left) && dfs(root1.right, root2.right))
            || (dfs(root1.left, root2.right) && dfs(root1.right, root2.left));
    };

    // Call the helper function with the root nodes
    return dfs(root1, root2);
};
