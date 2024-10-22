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
