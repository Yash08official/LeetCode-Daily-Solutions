# [214. Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome)

[中文文档](/solution/0200-0299/0214.Shortest%20Palindrome/README.md)

## Description

<!-- description:start -->

<p>You are given a string <code>s</code>. You can convert <code>s</code> to a <span data-keyword="palindrome-string">palindrome</span> by adding characters in front of it.</p>

<p>Return <em>the shortest palindrome you can find by performing this transformation</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> s = "aacecaaa"
<strong>Output:</strong> "aaacecaaa"
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> s = "abcd"
<strong>Output:</strong> "dcbabcd"
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> consists of lowercase English letters only.</li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1

#### Java

```java
class Solution {
    public String shortestPalindrome(String s) {
        int base = 131;
        int mul = 1;
        int mod = (int) 1e9 + 7;
        int prefix = 0, suffix = 0;
        int idx = 0;
        int n = s.length();
        for (int i = 0; i < n; ++i) {
            int t = s.charAt(i) - 'a' + 1;
            prefix = (int) (((long) prefix * base + t) % mod);
            suffix = (int) ((suffix + (long) t * mul) % mod);
            mul = (int) (((long) mul * base) % mod);
            if (prefix == suffix) {
                idx = i + 1;
            }
        }
        if (idx == n) {
            return s;
        }
        return new StringBuilder(s.substring(idx)).reverse().toString() + s;
    }
}
```

#### JavaScript

```js
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  var base = 131;
  var mul = 1;
  var mod = Math.pow(10, 9) + 7;
  var prefix = 0,
    suffix = 0;
  var idx = 0;
  var n = s.length;
  for (var i = 0; i < n; ++i) {
    var t = s.charCodeAt(i) - "a".charCodeAt(0) + 1;
    prefix = (prefix * base + t) % mod;
    suffix = (suffix + t * mul) % mod;
    mul = (mul * base) % mod;
    if (prefix === suffix) {
      idx = i + 1;
    }
  }
  if (idx === n) {
    return s;
  }
  return s.substring(idx).split("").reverse().join("") + s;
};
```
