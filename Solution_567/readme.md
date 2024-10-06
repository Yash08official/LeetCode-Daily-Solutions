# [567. Permutation in String](https://leetcode.com/problems/permutation-in-string)

## Description

<!-- description:start -->

<p>Given two strings <code>s1</code> and <code>s2</code>, return <code>true</code> if <code>s2</code> contains a <span data-keyword="permutation-string">permutation</span> of <code>s1</code>, or <code>false</code> otherwise.</p>

<p>In other words, return <code>true</code> if one of <code>s1</code>&#39;s permutations is the substring of <code>s2</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;ab&quot;, s2 = &quot;eidbaooo&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> s2 contains one permutation of s1 (&quot;ba&quot;).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;ab&quot;, s2 = &quot;eidboaoo&quot;
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s1.length, s2.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s1</code> and <code>s2</code> consist of lowercase English letters.</li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

#### Java

```java
class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int n = s1.length();
        int m = s2.length();
        if (n > m) {
            return false;
        }
        int[] cnt1 = new int[26];
        int[] cnt2 = new int[26];
        for (int i = 0; i < n; ++i) {
            ++cnt1[s1.charAt(i) - 'a'];
            ++cnt2[s2.charAt(i) - 'a'];
        }
        if (Arrays.equals(cnt1, cnt2)) {
            return true;
        }
        for (int i = n; i < m; ++i) {
            ++cnt2[s2.charAt(i) - 'a'];
            --cnt2[s2.charAt(i - n) - 'a'];
            if (Arrays.equals(cnt1, cnt2)) {
                return true;
            }
        }
        return false;
    }
}
```

#### JavaScript

```js
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // Lengths of the input strings
  const n = s1.length;
  const m = s2.length;

  // If s1 is longer than s2, it's impossible to find a permutation
  if (n > m) {
    return false;
  }

  // Frequency arrays for characters 'a' to 'z'
  const cnt1 = new Array(26).fill(0); // Frequency for s1
  const cnt2 = new Array(26).fill(0); // Frequency for the current window in s2

  // Initialize the frequency counts for s1 and the first window of s2
  for (let i = 0; i < n; i++) {
    cnt1[s1.charCodeAt(i) - "a".charCodeAt(0)]++; // Increment frequency for s1
    cnt2[s2.charCodeAt(i) - "a".charCodeAt(0)]++; // Increment frequency for the first window in s2
  }

  // Check if the initial window's frequency matches that of s1
  if (arraysEqual(cnt1, cnt2)) {
    return true;
  }

  // Slide the window across s2
  for (let i = n; i < m; i++) {
    // Add the new character to the current window
    cnt2[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
    // Remove the character that is sliding out of the window
    cnt2[s2.charCodeAt(i - n) - "a".charCodeAt(0)]--;

    // Check if the current window matches s1's frequency
    if (arraysEqual(cnt1, cnt2)) {
      return true;
    }
  }

  // No valid permutation found in any window
  return false;
};

// Helper function to compare frequency arrays
function arraysEqual(arr1, arr2) {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// Example usage:
console.log(checkInclusion("ab", "eidbaooo")); // Output: true
console.log(checkInclusion("ab", "eidboaoo")); // Output: false
```
