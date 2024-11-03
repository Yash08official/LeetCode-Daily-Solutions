# [796. Rotate String](https://leetcode.com/problems/rotate-string)

## Description

<!-- description:start -->

<p>Given two strings <code>s</code> and <code>goal</code>, return <code>true</code> <em>if and only if</em> <code>s</code> <em>can become</em> <code>goal</code> <em>after some number of <strong>shifts</strong> on</em> <code>s</code>.</p>

<p>A <strong>shift</strong> on <code>s</code> consists of moving the leftmost character of <code>s</code> to the rightmost position.</p>

<ul>
	<li>For example, if <code>s = &quot;abcde&quot;</code>, then it will be <code>&quot;bcdea&quot;</code> after one shift.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> s = "abcde", goal = "cdeab"
<strong>Output:</strong> true
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> s = "abcde", goal = "abced"
<strong>Output:</strong> false
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length, goal.length &lt;= 100</code></li>
	<li><code>s</code> and <code>goal</code> consist of lowercase English letters.</li>
</ul>

<!-- description:end -->

## Solutions

### Java

```java
class Solution {
    public boolean rotateString(String s, String goal) {

        //Check if lengths are the same
        if(s.length() != goal.length()){
            return false;
        }

        //Concatenate s with itself
        String doubles = s + s;

        //Check if goal is a substring of doubleS
        return doubles.contains(goal);

    }
}
```

### JavaScript

```js
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  // Step 1: Check if lengths are the same
  if (s.length !== goal.length) {
    return false;
  }

  // Step 2: Concatenate s with itself
  const doubleS = s + s;

  // Step 3: Check if goal is a substring of doubleS
  return doubleS.includes(goal);
};
```
