# [1268. Search Suggestions System](https://leetcode.com/problems/search-suggestions-system)

## Description

<!-- description:start -->

<p>You are given an array of strings <code>products</code> and a string <code>searchWord</code>.</p>

<p>Design a system that suggests at most three product names from <code>products</code> after each character of <code>searchWord</code> is typed. Suggested products should have common prefix with <code>searchWord</code>. If there are more than three products with a common prefix return the three lexicographically minimums products.</p>

<p>Return <em>a list of lists of the suggested products after each character of </em><code>searchWord</code><em> is typed</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> products = [&quot;mobile&quot;,&quot;mouse&quot;,&quot;moneypot&quot;,&quot;monitor&quot;,&quot;mousepad&quot;], searchWord = &quot;mouse&quot;
<strong>Output:</strong> [[&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;],[&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;],[&quot;mouse&quot;,&quot;mousepad&quot;],[&quot;mouse&quot;,&quot;mousepad&quot;],[&quot;mouse&quot;,&quot;mousepad&quot;]]
<strong>Explanation:</strong> products sorted lexicographically = [&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;,&quot;mouse&quot;,&quot;mousepad&quot;].
After typing m and mo all products match and we show user [&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;].
After typing mou, mous and mouse the system suggests [&quot;mouse&quot;,&quot;mousepad&quot;].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> products = [&quot;havana&quot;], searchWord = &quot;havana&quot;
<strong>Output:</strong> [[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;]]
<strong>Explanation:</strong> The only word &quot;havana&quot; will be always suggested while typing the search word.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= products.length &lt;= 1000</code></li>
	<li><code>1 &lt;= products[i].length &lt;= 3000</code></li>
	<li><code>1 &lt;= sum(products[i].length) &lt;= 2 * 10<sup>4</sup></code></li>
	<li>All the strings of <code>products</code> are <strong>unique</strong>.</li>
	<li><code>products[i]</code> consists of lowercase English letters.</li>
	<li><code>1 &lt;= searchWord.length &lt;= 1000</code></li>
	<li><code>searchWord</code> consists of lowercase English letters.</li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Sorting + Trie

The problem requires that after each letter of the input `searchWord`, recommend up to three products from the `products` array that have the same prefix as `searchWord`. If there are more than three products with the same prefix that can be recommended, return the three with the smallest lexicographic order.

To find products with the same prefix, we can use a trie; to return the three products with the smallest lexicographic order, we can first sort the `products` array, and then store the indices of the sorted array in the trie.

Each node of the trie maintains the following information:

- `children`: This is an array of length $26$, used to store the child nodes of the current node. `children[i]` represents the node whose character is `i + 'a'` among the child nodes of the current node.
- `v`: This is an array, used to store the indices of the characters in the `products` array among the child nodes of the current node, storing up to three indices.

During the search, we start from the root node of the trie, find the index array corresponding to each prefix, and store it in the result array. Finally, we only need to map each index in the index array to the `products` array.

The time complexity is $O(L \times \log n + m)$, and the space complexity is $O(L)$. Where $L$ is the sum of the lengths of all strings in the `products` array, and $n$ and $m$ are the lengths of the `products` array and `searchWord`, respectively.

#### Java

```java
class Trie {
    Trie[] children = new Trie[26];
    List<Integer> v = new ArrayList<>();

    public void insert(String w, int i) {
        Trie node = this;
        for (int j = 0; j < w.length(); ++j) {
            int idx = w.charAt(j) - 'a';
            if (node.children[idx] == null) {
                node.children[idx] = new Trie();
            }
            node = node.children[idx];
            if (node.v.size() < 3) {
                node.v.add(i);
            }
        }
    }

    public List<Integer>[] search(String w) {
        Trie node = this;
        int n = w.length();
        List<Integer>[] ans = new List[n];
        Arrays.setAll(ans, k -> new ArrayList<>());
        for (int i = 0; i < n; ++i) {
            int idx = w.charAt(i) - 'a';
            if (node.children[idx] == null) {
                break;
            }
            node = node.children[idx];
            ans[i] = node.v;
        }
        return ans;
    }
}

class Solution {
    public List<List<String>> suggestedProducts(String[] products, String searchWord) {
        Arrays.sort(products);
        Trie trie = new Trie();
        for (int i = 0; i < products.length; ++i) {
            trie.insert(products[i], i);
        }
        List<List<String>> ans = new ArrayList<>();
        for (var v : trie.search(searchWord)) {
            List<String> t = new ArrayList<>();
            for (int i : v) {
                t.add(products[i]);
            }
            ans.add(t);
        }
        return ans;
    }
}
```

#### JavaScript

```js
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();
  let trie = new Trie();
  for (let i = 0; i < products.length; i++) {
    trie.insert(products[i], i);
  }
  let ans = [];
  for (let v of trie.search(searchWord)) {
    let t = [];
    for (let i of v) {
      t.push(products[i]);
    }
    ans.push(t);
  }
  return ans;
};

class Trie {
  constructor() {
    this.children = new Array(26).fill(null);
    this.v = [];
  }

  insert(w, i) {
    let node = this;
    for (let j = 0; j < w.length; j++) {
      let idx = w.charCodeAt(j) - "a".charCodeAt(0);
      if (node.children[idx] === null) {
        node.children[idx] = new Trie();
      }
      node = node.children[idx];
      if (node.v.length < 3) {
        node.v.push(i);
      }
    }
  }

  search(w) {
    let node = this;
    let n = w.length;
    let ans = new Array(n).fill(null).map(() => []);
    for (let i = 0; i < n; i++) {
      let idx = w.charCodeAt(i) - "a".charCodeAt(0);
      if (node.children[idx] === null) {
        break;
      }
      node = node.children[idx];
      ans[i] = node.v;
    }
    return ans;
  }
}
```
