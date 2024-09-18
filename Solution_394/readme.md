# [394. Decode String](https://leetcode.com/problems/decode-string)



## Description

<!-- description:start -->

<p>Given an encoded string, return its decoded string.</p>

<p>The encoding rule is: <code>k[encoded_string]</code>, where the <code>encoded_string</code> inside the square brackets is being repeated exactly <code>k</code> times. Note that <code>k</code> is guaranteed to be a positive integer.</p>

<p>You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, <code>k</code>. For example, there will not be input like <code>3a</code> or <code>2[4]</code>.</p>

<p>The test cases are generated so that the length of the output will never exceed <code>10<sup>5</sup></code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;3[a]2[bc]&quot;
<strong>Output:</strong> &quot;aaabcbc&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;3[a2[c]]&quot;
<strong>Output:</strong> &quot;accaccacc&quot;
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;2[abc]3[cd]ef&quot;
<strong>Output:</strong> &quot;abcabccdcdcdef&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 30</code></li>
	<li><code>s</code> consists of lowercase English letters, digits, and square brackets <code>&#39;[]&#39;</code>.</li>
	<li><code>s</code> is guaranteed to be <strong>a valid</strong> input.</li>
	<li>All the integers in <code>s</code> are in the range <code>[1, 300]</code>.</li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

#### Java

```java
class Solution {
    public String decodeString(String s) {
        Deque<Integer> s1 = new ArrayDeque<>();
        Deque<String> s2 = new ArrayDeque<>();
        int num = 0;
        String res = "";
        for (char c : s.toCharArray()) {
            if ('0' <= c && c <= '9') {
                num = num * 10 + c - '0';
            } else if (c == '[') {
                s1.push(num);
                s2.push(res);
                num = 0;
                res = "";
            } else if (c == ']') {
                StringBuilder t = new StringBuilder();
                for (int i = 0, n = s1.pop(); i < n; ++i) {
                    t.append(res);
                }
                res = s2.pop() + t.toString();
            } else {
                res += String.valueOf(c);
            }
        }
        return res;
    }
}
```

#### JavaScript

```js
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stackNum = [];
  let stackRes = [];
  let num = 0;
  let res = "";

  for (let c of s) {
    if (c >= "0" && c <= "9") {
      num = num * 10 + parseInt(c);
    } else if (c === "[") {
      stackNum.push(num);
      stackRes.push(res);
      num = 0;
      res = "";
    } else if (c === "]") {
      let t = "";
      for (let i = 0, n = stackNum.pop(); i < n; ++i) {
        t += res;
      }
      res = stackRes.pop() + t;
    } else {
      res += c;
    }
  }

  return res;
};
```
