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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let cnt = new Map();
    cnt.set(0, 1);

    function dfs(node, s) {
        if (node === null) {
            return 0;
        }
        s += node.val;
        let ans = cnt.get(s - targetSum) || 0;
        cnt.set(s, (cnt.get(s) || 0) + 1);
        ans += dfs(node.left, s);
        ans += dfs(node.right, s);
        cnt.set(s, (cnt.get(s) || 0) - 1);
        if (cnt.get(s) === 0) {
            cnt.delete(s);
        }
        return ans;
    }

    return dfs(root, 0);
};