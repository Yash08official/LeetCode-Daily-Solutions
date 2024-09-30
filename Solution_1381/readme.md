# [1381. Design a Stack With Increment Operation](https://leetcode.com/problems/design-a-stack-with-increment-operation)

## Description

<!-- description:start -->

<p>Design a stack that supports increment operations on its elements.</p>

<p>Implement the <code>CustomStack</code> class:</p>

<ul>
	<li><code>CustomStack(int maxSize)</code> Initializes the object with <code>maxSize</code> which is the maximum number of elements in the stack.</li>
	<li><code>void push(int x)</code> Adds <code>x</code> to the top of the stack if the stack has not reached the <code>maxSize</code>.</li>
	<li><code>int pop()</code> Pops and returns the top of the stack or <code>-1</code> if the stack is empty.</li>
	<li><code>void inc(int k, int val)</code> Increments the bottom <code>k</code> elements of the stack by <code>val</code>. If there are less than <code>k</code> elements in the stack, increment all the elements in the stack.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;CustomStack&quot;,&quot;push&quot;,&quot;push&quot;,&quot;pop&quot;,&quot;push&quot;,&quot;push&quot;,&quot;push&quot;,&quot;increment&quot;,&quot;increment&quot;,&quot;pop&quot;,&quot;pop&quot;,&quot;pop&quot;,&quot;pop&quot;]
[[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]
<strong>Output</strong>
[null,null,null,2,null,null,null,null,null,103,202,201,-1]
<strong>Explanation</strong>
CustomStack stk = new CustomStack(3); // Stack is Empty []
stk.push(1);                          // stack becomes [1]
stk.push(2);                          // stack becomes [1, 2]
stk.pop();                            // return 2 --&gt; Return top of the stack 2, stack becomes [1]
stk.push(2);                          // stack becomes [1, 2]
stk.push(3);                          // stack becomes [1, 2, 3]
stk.push(4);                          // stack still [1, 2, 3], Do not add another elements as size is 4
stk.increment(5, 100);                // stack becomes [101, 102, 103]
stk.increment(2, 100);                // stack becomes [201, 202, 103]
stk.pop();                            // return 103 --&gt; Return top of the stack 103, stack becomes [201, 202]
stk.pop();                            // return 202 --&gt; Return top of the stack 202, stack becomes [201]
stk.pop();                            // return 201 --&gt; Return top of the stack 201, stack becomes []
stk.pop();                            // return -1 --&gt; Stack is empty return -1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= maxSize, x, k &lt;= 1000</code></li>
	<li><code>0 &lt;= val &lt;= 100</code></li>
	<li>At most <code>1000</code> calls will be made to each method of <code>increment</code>, <code>push</code> and <code>pop</code> each separately.</li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Array Simulation

We can use an array $stk$ to simulate the stack, and an integer $i$ to represent the position of the next element to be pushed into the stack. In addition, we need another array $add$ to record the cumulative increment value at each position.

When calling $push(x)$, if $i < maxSize$, we put $x$ into $stk[i]$ and increment $i$ by one.

When calling $pop()$, if $i \leq 0$, it means the stack is empty, so we return $-1$. Otherwise, we decrement $i$ by one, and the answer is $stk[i] + add[i]$. Then we add $add[i]$ to $add[i - 1]$, and set $add[i]$ to zero. Finally, we return the answer.

When calling $increment(k, val)$, if $i > 0$, we add $val$ to $add[\min(i, k) - 1]$.

The time complexity is $O(1)$, and the space complexity is $O(n)$. Where $n$ is the maximum capacity of the stack.

### Java

```java
class CustomStack {
    int[] stack;
    int top=-1;

    public CustomStack(int maxSize) {
        this.stack = new int[maxSize];
    }

    public void push(int x) {
        if(top < this.stack.length-1){
            top++;
            this.stack[top] = x;
        }
    }

    public int pop() {
        if(top != -1){
            return this.stack[top--];
        }
        return -1;
    }

    public void increment(int k, int val) {
       for(int i=0;i<Math.min(k,top+1);i++){
           this.stack[i] += val;
       }

    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * CustomStack obj = new CustomStack(maxSize);
 * obj.push(x);
 * int param_2 = obj.pop();
 * obj.increment(k,val);
 */
```

### JavaScript

```js
/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = new Array(maxSize).fill(0);
  this.top = -1;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.top < this.stack.length - 1) {
    this.top++;
    this.stack[this.top] = x;
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.top !== -1) {
    return this.stack[this.top--];
  }
  return -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  for (let i = 0; i < Math.min(k, this.top + 1); i++) {
    this.stack[i] += val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
```
