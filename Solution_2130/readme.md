# [2130. Maximum Twin Sum of a Linked List](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list)

## Description

<!-- description:start -->

<p>In a linked list of size <code>n</code>, where <code>n</code> is <strong>even</strong>, the <code>i<sup>th</sup></code> node (<strong>0-indexed</strong>) of the linked list is known as the <strong>twin</strong> of the <code>(n-1-i)<sup>th</sup></code> node, if <code>0 &lt;= i &lt;= (n / 2) - 1</code>.</p>

<ul>
	<li>For example, if <code>n = 4</code>, then node <code>0</code> is the twin of node <code>3</code>, and node <code>1</code> is the twin of node <code>2</code>. These are the only nodes with twins for <code>n = 4</code>.</li>
</ul>

<p>The <strong>twin sum </strong>is defined as the sum of a node and its twin.</p>

<p>Given the <code>head</code> of a linked list with even length, return <em>the <strong>maximum twin sum</strong> of the linked list</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2130.Maximum%20Twin%20Sum%20of%20a%20Linked%20List/images/eg1drawio.png" style="width: 250px; height: 70px;" />
<pre>
<strong>Input:</strong> head = [5,4,2,1]
<strong>Output:</strong> 6
<strong>Explanation:</strong>
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6. 
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2130.Maximum%20Twin%20Sum%20of%20a%20Linked%20List/images/eg2drawio.png" style="width: 250px; height: 70px;" />
<pre>
<strong>Input:</strong> head = [4,2,2,3]
<strong>Output:</strong> 7
<strong>Explanation:</strong>
The nodes with twins present in this linked list are:
- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
Thus, the maximum twin sum of the linked list is max(7, 4) = 7. 
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2130.Maximum%20Twin%20Sum%20of%20a%20Linked%20List/images/eg3drawio.png" style="width: 200px; height: 88px;" />
<pre>
<strong>Input:</strong> head = [1,100000]
<strong>Output:</strong> 100001
<strong>Explanation:</strong>
There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is an <strong>even</strong> integer in the range <code>[2, 10<sup>5</sup>]</code>.</li>
	<li><code>1 &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
</ul>

<!-- description:end -->

## Solution

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
    public int pairSum(ListNode head) {
        List<Integer> s = new ArrayList<>();
        for (; head != null; head = head.next) {
            s.add(head.val);
        }
        int ans = 0, n = s.size();
        for (int i = 0; i < (n >> 1); ++i) {
            ans = Math.max(ans, s.get(i) + s.get(n - 1 - i));
        }
        return ans;
    }
}
```

#### JavaScript

```javascript
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
var pairSum = function (head) {
  let s = [];
  for (let node = head; node != null; node = node.next) {
    s.push(node.val);
  }
  let ans = 0,
    n = s.length;
  for (let i = 0; i < Math.floor(n / 2); ++i) {
    ans = Math.max(ans, s[i] + s[n - 1 - i]);
  }
  return ans;
};
```
