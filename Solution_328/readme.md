<!-- problem:start -->

# [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list)

## Description

<!-- description:start -->

<p>Given the <code>head</code> of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return <em>the reordered list</em>.</p>

<p>The <strong>first</strong> node is considered <strong>odd</strong>, and the <strong>second</strong> node is <strong>even</strong>, and so on.</p>

<p>Note that the relative order inside both the even and odd groups should remain as it was in the input.</p>

<p>You must solve the problem&nbsp;in <code>O(1)</code>&nbsp;extra space complexity and <code>O(n)</code> time complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0300-0399/0328.Odd%20Even%20Linked%20List/images/oddeven-linked-list.jpg" style="width: 300px; height: 123px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5]
<strong>Output:</strong> [1,3,5,2,4]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0300-0399/0328.Odd%20Even%20Linked%20List/images/oddeven2-linked-list.jpg" style="width: 500px; height: 142px;" />
<pre>
<strong>Input:</strong> head = [2,1,3,5,6,4,7]
<strong>Output:</strong> [2,3,6,7,1,5,4]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the linked list is in the range <code>[0, 10<sup>4</sup>]</code>.</li>
	<li><code>-10<sup>6</sup> &lt;= Node.val &lt;= 10<sup>6</sup></code></li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Single Pass

We can use two pointers $a$ and $b$ to represent the tail nodes of the odd and even nodes respectively. Initially, pointer $a$ points to the head node $head$ of the list, and pointer $b$ points to the second node $head.next$ of the list. In addition, we use a pointer $c$ to point to the head node $head.next$ of the even nodes, which is the initial position of pointer $b$.

We traverse the list, set pointer $a$ to point to the next node of $b$, i.e., $a.next = b.next$, then move pointer $a$ back by one position, i.e., $a = a.next$; set pointer $b$ to point to the next node of $a$, i.e., $b.next = a.next$, then move pointer $b$ back by one position, i.e., $b = b.next$. Continue to traverse until $b$ reaches the end of the list.

Finally, we set the tail node $a$ of the odd nodes to point to the head node $c$ of the even nodes, i.e., $a.next = c$, then return the head node $head$ of the list.

The time complexity is $O(n)$, where $n$ is the length of the list, and we need to traverse the list once. The space complexity is $O(1)$. We only need to maintain a limited number of pointers.

#### Java

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode oddEvenList(ListNode head) {
        if (head == null) {
            return null;
        }
        ListNode a = head;
        ListNode b = head.next, c = b;
        while (b != null && b.next != null) {
            a.next = b.next;
            a = a.next;
            b.next = a.next;
            b = b.next;
        }
        a.next = c;
        return head;
    }
}
```

#### JavaScript

```
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null) {
        return null;
    }
    var a = head;
    var b = head.next;
    var c = b;
    while (b !== null && b.next !== null) {
        a.next = b.next;
        a = a.next;
        b.next = a.next;
        b = b.next;
    }
    a.next = c;
    return head;
};
```
