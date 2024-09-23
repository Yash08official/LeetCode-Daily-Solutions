# [2707. Extra Characters in a String](https://leetcode.com/problems/extra-characters-in-a-string)

## Description

<!-- description:start -->

<p>You are given a <strong>0-indexed</strong> string <code>s</code> and a dictionary of words <code>dictionary</code>. You have to break <code>s</code> into one or more <strong>non-overlapping</strong> substrings such that each substring is present in <code>dictionary</code>. There may be some <strong>extra characters</strong> in <code>s</code> which are not present in any of the substrings.</p>

<p>Return <em>the <strong>minimum</strong> number of extra characters left over if you break up </em><code>s</code><em> optimally.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;leetscode&quot;, dictionary = [&quot;leet&quot;,&quot;code&quot;,&quot;leetcode&quot;]
<strong>Output:</strong> 1
<strong>Explanation:</strong> We can break s in two substrings: &quot;leet&quot; from index 0 to 3 and &quot;code&quot; from index 5 to 8. There is only 1 unused character (at index 4), so we return 1.

</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;sayhelloworld&quot;, dictionary = [&quot;hello&quot;,&quot;world&quot;]
<strong>Output:</strong> 3
<strong>Explanation:</strong> We can break s in two substrings: &quot;hello&quot; from index 3 to 7 and &quot;world&quot; from index 8 to 12. The characters at indices 0, 1, 2 are not used in any substring and thus are considered as extra characters. Hence, we return 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 50</code></li>
	<li><code>1 &lt;= dictionary.length &lt;= 50</code></li>
	<li><code>1 &lt;= dictionary[i].length &lt;= 50</code></li>
	<li><code>dictionary[i]</code>&nbsp;and <code>s</code> consists of only lowercase English letters</li>
	<li><code>dictionary</code> contains distinct words</li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Hash Table + Dynamic Programming

We can use a hash table $ss$ to record all words in the dictionary, which allows us to quickly determine whether a string is in the dictionary.

Next, we define $f[i]$ to represent the minimum number of extra characters in the first $i$ characters of string $s$, initially $f[0] = 0$.

When $i \ge 1$, the $i$th character $s[i - 1]$ can be an extra character, in which case $f[i] = f[i - 1] + 1$. If there exists an index $j \in [0, i - 1]$ such that $s[j..i)$ is in the hash table $ss$, then we can take $s[j..i)$ as a word, in which case $f[i] = f[j]$.

In summary, we can get the state transition equation:

$$
f[i] = \min \{ f[i - 1] + 1, \min_{j \in [0, i - 1]} f[j] \}
$$

where $i \ge 1$, and $j \in [0, i - 1]$ and $s[j..i)$ is in the hash table $ss$.

The final answer is $f[n]$.

The time complexity is $O(n^3 + L)$, and the space complexity is $O(n + L)$. Here, $n$ is the length of string $s$, and $L$ is the sum of the lengths of all words in the dictionary.

#### Java

```java
class Solution {
    public int minExtraChar(String s, String[] dictionary) {
        Set<String> ss = new HashSet<>();
        for (String w : dictionary) {
            ss.add(w);
        }
        int n = s.length();
        int[] f = new int[n + 1];
        f[0] = 0;
        for (int i = 1; i <= n; ++i) {
            f[i] = f[i - 1] + 1;
            for (int j = 0; j < i; ++j) {
                if (ss.contains(s.substring(j, i))) {
                    f[i] = Math.min(f[i], f[j]);
                }
            }
        }
        return f[n];
    }
}
````

#### JavaScript

```js
