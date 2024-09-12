# [735. Asteroid Collision](https://leetcode.com/problems/asteroid-collision)

[中文文档](/solution/0700-0799/0735.Asteroid%20Collision/README.md)

## Description

<!-- description:start -->

<p>We are given an array <code>asteroids</code> of integers representing asteroids in a row.</p>

<p>For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.</p>

<p>Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> asteroids = [5,10,-5]
<strong>Output:</strong> [5,10]
<strong>Explanation:</strong> The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> asteroids = [8,-8]
<strong>Output:</strong> []
<strong>Explanation:</strong> The 8 and -8 collide exploding each other.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> asteroids = [10,2,-5]
<strong>Output:</strong> [10]
<strong>Explanation:</strong> The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= asteroids.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-1000 &lt;= asteroids[i] &lt;= 1000</code></li>
	<li><code>asteroids[i] != 0</code></li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Stack

We traverse each asteroid $x$ from left to right. Since each asteroid may collide with multiple asteroids before it, we consider using a stack to store.

-   For the current asteroid, if $x>0$, it will definitely not collide with the previous asteroid, and we can directly push $x$ into the stack.
-   Otherwise, if the stack is not empty and the top element of the stack is greater than $0$, and the top element of the stack is less than $-x$, then the top element of the stack corresponds to the asteroid will explode, we loop to the top element of the stack Pop out until the condition is not satisfied. At this time, if the top element of the stack is equal to $-x$, then the two asteroids will explode, and we only need to pop the top element of the stack; if the stack is empty, or the top element of the stack is less than $0$, then the current asteroid will not collide, we will push $x$ into the stack.

Finally, we return the elements in the stack as the answer.

The time complexity is $O(n)$, and the space complexity is $O(n)$. Where $n$ is the length of the array $asteroids$.

#### Java

```java
class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        Deque<Integer> stk = new ArrayDeque<>();
        for (int x : asteroids) {
            if (x > 0) {
                stk.offerLast(x);
            } else {
                while (!stk.isEmpty() && stk.peekLast() > 0 && stk.peekLast() < -x) {
                    stk.pollLast();
                }
                if (!stk.isEmpty() && stk.peekLast() == -x) {
                    stk.pollLast();
                } else if (stk.isEmpty() || stk.peekLast() < 0) {
                    stk.offerLast(x);
                }
            }
        }
        return stk.stream().mapToInt(Integer::valueOf).toArray();
    }
}
```