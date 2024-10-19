# [1545. Find Kth Bit in Nth Binary String](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string)

## Description

<!-- description:start -->

<p>Given two positive integers <code>n</code> and <code>k</code>, the binary string <code>S<sub>n</sub></code> is formed as follows:</p>

<ul>
	<li><code>S<sub>1</sub> = &quot;0&quot;</code></li>
	<li><code>S<sub>i</sub> = S<sub>i - 1</sub> + &quot;1&quot; + reverse(invert(S<sub>i - 1</sub>))</code> for <code>i &gt; 1</code></li>
</ul>

<p>Where <code>+</code> denotes the concatenation operation, <code>reverse(x)</code> returns the reversed string <code>x</code>, and <code>invert(x)</code> inverts all the bits in <code>x</code> (<code>0</code> changes to <code>1</code> and <code>1</code> changes to <code>0</code>).</p>

<p>For example, the first four strings in the above sequence are:</p>

<ul>
	<li><code>S<sub>1 </sub>= &quot;0&quot;</code></li>
	<li><code>S<sub>2 </sub>= &quot;0<strong>1</strong>1&quot;</code></li>
	<li><code>S<sub>3 </sub>= &quot;011<strong>1</strong>001&quot;</code></li>
	<li><code>S<sub>4</sub> = &quot;0111001<strong>1</strong>0110001&quot;</code></li>
</ul>

<p>Return <em>the</em> <code>k<sup>th</sup></code> <em>bit</em> <em>in</em> <code>S<sub>n</sub></code>. It is guaranteed that <code>k</code> is valid for the given <code>n</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 3, k = 1
<strong>Output:</strong> &quot;0&quot;
<strong>Explanation:</strong> S<sub>3</sub> is &quot;<strong><u>0</u></strong>111001&quot;.
The 1<sup>st</sup> bit is &quot;0&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 4, k = 11
<strong>Output:</strong> &quot;1&quot;
<strong>Explanation:</strong> S<sub>4</sub> is &quot;0111001101<strong><u>1</u></strong>0001&quot;.
The 11<sup>th</sup> bit is &quot;1&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 20</code></li>
	<li><code>1 &lt;= k &lt;= 2<sup>n</sup> - 1</code></li>
</ul>

<!-- description:end -->

## Solutions

#### Java

```java
class Solution {
    public char findKthBit(int n, int k) {
        // The length of the sequence at level n is 2^n - 1
        int len = (int)Math.pow(2, n) - 1;

        // Start the recursion to find the k-th bit
        return recur(len, k);
    }

    // Recursive function to find the k-th bit in the sequence of length 'len'
    public char recur(int len, int k){
        // Base case: If the sequence length is 1, the sequence is just "0"
        if (len == 1) {
            return '0'; // The first sequence S1 is just '0'
        }

        // Calculate the midpoint (middle position) of the current sequence
        int half = len / 2; // Half length of the sequence (left part)
        int middle = half + 1; // Middle point (1-based index)

        // Print current status for debugging purposes
        System.out.println("len -> "+ len + " ,middle-> " + middle + " ,k-> "+ k);

        // If k is the middle position, the answer is always '1'
        if (k == middle) {
            return '1';
        } else if (k < middle) { // If k is in the left half
            return recur(half, k); // Recursively search in the left half
        } else { // If k is in the right half
            // Recursively find the corresponding bit in the left half
            // and invert it (since the right half is the inverted reverse of the left)
            char ans = recur(half, 1 + len - k);
            return (ans == '0') ? '1' : '0'; // Invert the bit
        }
    }
}
```

#### JavaScript

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  // Calculate the length of the binary string S_n, which is 2^n - 1
  let len = Math.pow(2, n) - 1;

  // Helper recursive function to find the k-th bit
  const recur = (len, k) => {
    // Base case: If the length is 1, the only bit is '0'
    if (len === 1) {
      return "0";
    }

    // Calculate the middle index of the current binary string
    let half = Math.floor(len / 2);
    let middle = half + 1;

    // If k is the middle bit, return '1'
    if (k === middle) {
      return "1";
    } else if (k < middle) {
      // If k is in the left half, recursively search the left half
      return recur(half, k);
    } else {
      // If k is in the right half, recursively search the right half
      let ans = recur(half, 1 + len - k);
      // Flip the bit and return it
      return ans === "0" ? "1" : "0";
    }
  };

  // Call the recursive function and return the result
  return recur(len, k);
};
```
