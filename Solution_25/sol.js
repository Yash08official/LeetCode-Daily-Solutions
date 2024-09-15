/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0, head);
    let pre = dummy, cur = dummy;
    while (cur.next !== null) {
        for (let i = 0; i < k && cur !== null; ++i) {
            cur = cur.next;
        }
        if (cur === null) {
            return dummy.next;
        }
        let t = cur.next;
        cur.next = null;
        let start = pre.next;
        pre.next = reverseList(start);
        start.next = t;
        pre = start;
        cur = pre;
    }
    return dummy.next;
};

function reverseList(head) {
    let pre = null, p = head;
    while (p !== null) {
        let q = p.next;
        p.next = pre;
        pre = p;
        p = q;
    }
    return pre;
}