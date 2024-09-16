/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let s = [];
    for (let node = head; node != null; node = node.next) {
        s.push(node.val);
    }
    let ans = 0, n = s.length;
    for (let i = 0; i < Math.floor(n / 2); ++i) {
        ans = Math.max(ans, s[i] + s[n - 1 - i]);
    }
    return ans;
};