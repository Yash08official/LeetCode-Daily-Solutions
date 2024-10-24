class Solution {
    // Main method to check if two binary trees are flip equivalent
    public boolean flipEquiv(TreeNode root1, TreeNode root2) {
        // Call the dfs helper function to perform the comparison recursively
        return dfs(root1, root2);
    }

    // Helper method to recursively check flip equivalence
    private boolean dfs(TreeNode root1, TreeNode root2) {
        // Base case: If both nodes are the same (either both null or the same node), return true
        if (root1 == root2 || (root1 == null && root2 == null)) {
            return true;
        }
        
        // If one node is null and the other is not, or their values are different, return false
        if (root1 == null || root2 == null || root1.val != root2.val) {
            return false;
        }
        
        // Recursively check two cases:
        // 1. Compare the left child of root1 with the left child of root2 and
        //    the right child of root1 with the right child of root2.
        // 2. Compare the left child of root1 with the right child of root2 and
        //    the right child of root1 with the left child of root2.
        // If either case is true, return true (trees are flip equivalent).
        return (dfs(root1.left, root2.left) && dfs(root1.right, root2.right))
            || (dfs(root1.left, root2.right) && dfs(root1.right, root2.left));
    }
}
