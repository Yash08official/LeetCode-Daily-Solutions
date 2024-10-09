# [921. Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid)

## Description

<!-- description:start -->

<p>A parentheses string is valid if and only if:</p>

<ul>
	<li>It is the empty string,</li>
	<li>It can be written as <code>AB</code> (<code>A</code> concatenated with <code>B</code>), where <code>A</code> and <code>B</code> are valid strings, or</li>
	<li>It can be written as <code>(A)</code>, where <code>A</code> is a valid string.</li>
</ul>

<p>You are given a parentheses string <code>s</code>. In one move, you can insert a parenthesis at any position of the string.</p>

<ul>
	<li>For example, if <code>s = &quot;()))&quot;</code>, you can insert an opening parenthesis to be <code>&quot;(<strong>(</strong>)))&quot;</code> or a closing parenthesis to be <code>&quot;())<strong>)</strong>)&quot;</code>.</li>
</ul>

<p>Return <em>the minimum number of moves required to make </em><code>s</code><em> valid</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;())&quot;
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(((&quot;
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s[i]</code> is either <code>&#39;(&#39;</code> or <code>&#39;)&#39;</code>.</li>
</ul>

<!-- description:end -->

## Solutions

### Java

```java
class Solution {
    public int minAddToMakeValid(String s) {

        // Two variables to keep track of unbalanced parentheses.
        // 'open' counts unmatched opening parentheses '(',
        // 'closed' counts unmatched closing parentheses ')'.
        int open = 0, closed = 0;

        // Iterate through each character in the string 's'.
        for (char c : s.toCharArray()) {

            // If the character is an opening parenthesis '(',
            // increment the 'open' counter.
            if (c == '(') {
                open++;
            }
            // If the character is a closing parenthesis ')' and there are unmatched opening parentheses,
            // decrement the 'open' counter (meaning one pair is balanced).
            else if (open > 0) {
                open--;
            }
            // If there's no unmatched opening parenthesis and we find a closing parenthesis,
            // increment the 'closed' counter (meaning this closing parenthesis is unmatched).
            else {
                closed++;
            }
        }

        // The total number of additions required to balance the parentheses
        // is the sum of unmatched opening and unmatched closing parentheses.
        return open + closed;
    }
}
```

### JavaScript

```js
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  // Two variables to keep track of unbalanced parentheses.
  // 'open' counts unmatched opening parentheses '(',
  // 'closed' counts unmatched closing parentheses ')'.
  let open = 0,
    closed = 0;

  // Iterate through each character in the string 's'.
  for (let c of s) {
    // If the character is an opening parenthesis '(',
    // increment the 'open' counter.
    if (c === "(") {
      open++;
    }
    // If the character is a closing parenthesis ')' and there are unmatched opening parentheses,
    // decrement the 'open' counter (meaning one pair is balanced).
    else if (open > 0) {
      open--;
    }
    // If there's no unmatched opening parenthesis and we find a closing parenthesis,
    // increment the 'closed' counter (meaning this closing parenthesis is unmatched).
    else {
      closed++;
    }
  }

  // The total number of additions required to balance the parentheses
  // is the sum of unmatched opening and unmatched closing parentheses.
  return open + closed;
};
```
