# [432. All O`one Data Structure](https://leetcode.com/problems/all-oone-data-structure)

## Description

<!-- description:start -->

<p>Design a data structure to store the strings&#39; count with the ability to return the strings with minimum and maximum counts.</p>

<p>Implement the <code>AllOne</code> class:</p>

<ul>
	<li><code>AllOne()</code> Initializes the object of the data structure.</li>
	<li><code>inc(String key)</code> Increments the count of the string <code>key</code> by <code>1</code>. If <code>key</code> does not exist in the data structure, insert it with count <code>1</code>.</li>
	<li><code>dec(String key)</code> Decrements the count of the string <code>key</code> by <code>1</code>. If the count of <code>key</code> is <code>0</code> after the decrement, remove it from the data structure. It is guaranteed that <code>key</code> exists in the data structure before the decrement.</li>
	<li><code>getMaxKey()</code> Returns one of the keys with the maximal count. If no element exists, return an empty string <code>&quot;&quot;</code>.</li>
	<li><code>getMinKey()</code> Returns one of the keys with the minimum count. If no element exists, return an empty string <code>&quot;&quot;</code>.</li>
</ul>

<p><strong>Note</strong> that each function must run in <code>O(1)</code> average time complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;AllOne&quot;, &quot;inc&quot;, &quot;inc&quot;, &quot;getMaxKey&quot;, &quot;getMinKey&quot;, &quot;inc&quot;, &quot;getMaxKey&quot;, &quot;getMinKey&quot;]
[[], [&quot;hello&quot;], [&quot;hello&quot;], [], [], [&quot;leet&quot;], [], []]
<strong>Output</strong>
[null, null, null, &quot;hello&quot;, &quot;hello&quot;, null, &quot;hello&quot;, &quot;leet&quot;]

<strong>Explanation</strong>
AllOne allOne = new AllOne();
allOne.inc(&quot;hello&quot;);
allOne.inc(&quot;hello&quot;);
allOne.getMaxKey(); // return &quot;hello&quot;
allOne.getMinKey(); // return &quot;hello&quot;
allOne.inc(&quot;leet&quot;);
allOne.getMaxKey(); // return &quot;hello&quot;
allOne.getMinKey(); // return &quot;leet&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= key.length &lt;= 10</code></li>
	<li><code>key</code> consists of lowercase English letters.</li>
	<li>It is guaranteed that for each call to <code>dec</code>, <code>key</code> is existing in the data structure.</li>
	<li>At most <code>5 * 10<sup>4</sup></code>&nbsp;calls will be made to <code>inc</code>, <code>dec</code>, <code>getMaxKey</code>, and <code>getMinKey</code>.</li>
</ul>

<!-- description:end -->

## Solutions

#### Java

```java
class AllOne {
    Node root = new Node();
    Map<String, Node> nodes = new HashMap<>();

    public AllOne() {
        root.next = root;
        root.prev = root;
    }

    public void inc(String key) {
        if (!nodes.containsKey(key)) {
            if (root.next == root || root.next.cnt > 1) {
                nodes.put(key, root.insert(new Node(key, 1)));
            } else {
                root.next.keys.add(key);
                nodes.put(key, root.next);
            }
        } else {
            Node curr = nodes.get(key);
            Node next = curr.next;
            if (next == root || next.cnt > curr.cnt + 1) {
                nodes.put(key, curr.insert(new Node(key, curr.cnt + 1)));
            } else {
                next.keys.add(key);
                nodes.put(key, next);
            }
            curr.keys.remove(key);
            if (curr.keys.isEmpty()) {
                curr.remove();
            }
        }
    }

    public void dec(String key) {
        Node curr = nodes.get(key);
        if (curr.cnt == 1) {
            nodes.remove(key);
        } else {
            Node prev = curr.prev;
            if (prev == root || prev.cnt < curr.cnt - 1) {
                nodes.put(key, prev.insert(new Node(key, curr.cnt - 1)));
            } else {
                prev.keys.add(key);
                nodes.put(key, prev);
            }
        }

        curr.keys.remove(key);
        if (curr.keys.isEmpty()) {
            curr.remove();
        }
    }

    public String getMaxKey() {
        return root.prev.keys.iterator().next();
    }

    public String getMinKey() {
        return root.next.keys.iterator().next();
    }
}

class Node {
    Node prev;
    Node next;
    int cnt;
    Set<String> keys = new HashSet<>();

    public Node() {
        this("", 0);
    }

    public Node(String key, int cnt) {
        this.cnt = cnt;
        keys.add(key);
    }

    public Node insert(Node node) {
        node.prev = this;
        node.next = this.next;
        node.prev.next = node;
        node.next.prev = node;
        return node;
    }

    public void remove() {
        this.prev.next = this.next;
        this.next.prev = this.prev;
    }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * AllOne obj = new AllOne();
 * obj.inc(key);
 * obj.dec(key);
 * String param_3 = obj.getMaxKey();
 * String param_4 = obj.getMinKey();
 */
```

#### JavaScript

```
// DoubleLinkedList and Map
const dll = function(freq, ele, prev, next) {
    this.freq = freq;
    this.next = next?next:null;
    this.prev = prev?prev:null;
    this.ele = new Set();
    if(ele) {
        this.ele.add(ele)
    }
}
var AllOne = function() {
    this.nodeMap = new Map();
    this.head = null;
    this.tail = null;
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.addtodll = function (key, node) {
    let temp;
    if(!node) {
        if(!this.head) {
            temp = new dll(1, key);
            this.head = temp;
            this.tail = temp;
        } else {
            if(this.head.freq === 1) {
                temp = this.head;
                this.head.ele.add(key);
            } else {
                temp = new dll(1, key, null, this.head);
                this.head.prev = temp;
                this.head = temp;
            }
        }
    } else {
        let c_node = node;
        let n_node = node.next;
        let n_freq = node.freq + 1;
        if(n_node === null) {
            temp = new dll(n_freq, key, c_node, null);
            this.tail = temp;
            c_node.next = temp;
        } else if (n_node.freq === n_freq){
            temp = n_node;
            temp.ele.add(key);
        } else {
            temp = new dll(n_freq, key, c_node, c_node.next);
            c_node.next = temp;
            temp.next.prev = temp;
        }

        c_node.ele.delete(key);
        if(c_node.ele.size === 0) {
            if(c_node.prev === null) {
                this.head = c_node.next;
                c_node.next.prev = null
            } else {
                c_node.prev.next = temp;
                temp.prev = c_node.prev;
            }
        }

    }
    return temp;
}
AllOne.prototype.inc = function(key) {
    let c_node = this.addtodll(key, this.nodeMap.get(key));
    this.nodeMap.set(key, c_node);
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.removefromdll = function(key, node) {
    let c_freq = node.freq;
    let r_freq = c_freq - 1;
    let temp;
    if(c_freq === 1) {
        node.ele.delete(key);
        if(node.ele.size === 0) {
            if(this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = node.next;
                node.next.prev = null;
            }
        }
        return null;
    } else {
        if(node.prev === null) {
            temp = new dll(r_freq, key, null, node);
            this.head = temp;
            node.prev = temp;
        } else if(node.prev.freq === r_freq) {
            temp = node.prev;
            temp.ele.add(key);
        } else {
            temp = new dll(r_freq, key, node.prev, node);
            node.prev.next = temp;
            node.prev = temp;
        }

        node.ele.delete(key);
        if(node.ele.size === 0) {
            if(node.next === null) {
                this.tail = node.prev;
                temp.next = null;
            } else {
                node.next.prev = temp;
                temp.next = node.next;
            }
        }
    }
    return temp;
}
AllOne.prototype.dec = function(key) {
    let c_node = this.removefromdll(key, this.nodeMap.get(key));
    if(c_node) {
        this.nodeMap.set(key, c_node);
    } else {
        this.nodeMap.delete(key)
    }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    if(this.tail) {
        const [f] = this.tail.ele;
        return f
    }
    return '';
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    if(this.head) {
        const [f] = this.head.ele;
        return f
    }
    return ''
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
```
