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
var kthLargestLevelSum = function(root, k) {
    // Min-Heap to store the k largest sums
    let pq = new MinPriorityQueue({ priority: x => x });
    
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
