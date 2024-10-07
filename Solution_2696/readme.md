# [2696. Minimum String Length After Removing Substrings](https://leetcode.com/problems/minimum-string-length-after-removing-substrings)

## Description

<!-- description:start -->

<p>You are given a string <code>s</code> consisting only of <strong>uppercase</strong> English letters.</p>

<p>You can apply some operations to this string where, in one operation, you can remove <strong>any</strong> occurrence of one of the substrings <code>&quot;AB&quot;</code> or <code>&quot;CD&quot;</code> from <code>s</code>.</p>

<p>Return <em>the <strong>minimum</strong> possible length of the resulting string that you can obtain</em>.</p>

<p><strong>Note</strong> that the string concatenates after removing the substring and could produce new <code>&quot;AB&quot;</code> or <code>&quot;CD&quot;</code> substrings.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;ABFCACDB&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> We can do the following operations:
- Remove the substring &quot;<u>AB</u>FCACDB&quot;, so s = &quot;FCACDB&quot;.
- Remove the substring &quot;FCA<u>CD</u>B&quot;, so s = &quot;FCAB&quot;.
- Remove the substring &quot;FC<u>AB</u>&quot;, so s = &quot;FC&quot;.
So the resulting length of the string is 2.
It can be shown that it is the minimum length that we can obtain.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;ACBBD&quot;
<strong>Output:</strong> 5
<strong>Explanation:</strong> We cannot do any operations on the string so the length remains the same.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 100</code></li>
	<li><code>s</code>&nbsp;consists only of uppercase English letters.</li>
</ul>

<!-- description:end -->

## Solutions

### Java

```java
import java.util.Stack;

class Solution {
    // Method to find the minimum length of string after removing 'AB' and 'CD' pairs
    public int minLength(String s) {
        // Stack to store characters for processing
        Stack<Character> stack = new Stack<>();

        // Loop through each character in the string
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i); // Get the current character at index 'i'

            // If stack is empty, push the character onto the stack
            if (stack.isEmpty()) {
                stack.push(ch);
                continue; // Skip the rest of the loop for this iteration
            }

            // If the current character is 'B' and the top of the stack is 'A', remove 'A'
            if (ch == 'B' && stack.peek() == 'A') {
                stack.pop(); // 'AB' pair found, remove the 'A' from the stack
            }
            // If the current character is 'D' and the top of the stack is 'C', remove 'C'
            else if (ch == 'D' && stack.peek() == 'C') {
                stack.pop(); // 'CD' pair found, remove the 'C' from the stack
            }
            // If no pairs are found, push the current character onto the stack
            else {
                stack.push(ch);
            }
        }

        // Return the size of the stack, which represents the remaining characters
        return stack.size();
    }
}
```

### JavaScript

```js
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  // Stack to store characters for processing
  let stack = [];

  // Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i); // Get the current character at index 'i'

    // If stack is empty, push the character onto the stack
    if (stack.length === 0) {
      stack.push(ch);
      continue; // Skip the rest of the loop for this iteration
    }

    // If the current character is 'B' and the top of the stack is 'A', remove 'A'
    if (ch === "B" && stack[stack.length - 1] === "A") {
      stack.pop(); // 'AB' pair found, remove the 'A' from the stack
    }
    // If the current character is 'D' and the top of the stack is 'C', remove 'C'
    else if (ch === "D" && stack[stack.length - 1] === "C") {
      stack.pop(); // 'CD' pair found, remove the 'C' from the stack
    }
    // If no pairs are found, push the current character onto the stack
    else {
      stack.push(ch);
    }
  }

  // Return the size of the stack, which represents the remaining characters
  return stack.length;
};
```
