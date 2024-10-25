# [1233. Remove Sub-Folders from the Filesystem](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem)

## Description

<!-- description:start -->

<p>Given a list of folders <code>folder</code>, return <em>the folders after removing all <strong>sub-folders</strong> in those folders</em>. You may return the answer in <strong>any order</strong>.</p>

<p>If a <code>folder[i]</code> is located within another <code>folder[j]</code>, it is called a <strong>sub-folder</strong> of it. A sub-folder of <code>folder[j]</code> must start with <code>folder[j]</code>, followed by a <code>&quot;/&quot;</code>. For example, <code>&quot;/a/b&quot;</code> is a sub-folder of <code>&quot;/a&quot;</code>, but <code>&quot;/b&quot;</code> is not a sub-folder of <code>&quot;/a/b/c&quot;</code>.</p>

<p>The format of a path is one or more concatenated strings of the form: <code>&#39;/&#39;</code> followed by one or more lowercase English letters.</p>

<ul>
	<li>For example, <code>&quot;/leetcode&quot;</code> and <code>&quot;/leetcode/problems&quot;</code> are valid paths while an empty string and <code>&quot;/&quot;</code> are not.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> folder = [&quot;/a&quot;,&quot;/a/b&quot;,&quot;/c/d&quot;,&quot;/c/d/e&quot;,&quot;/c/f&quot;]
<strong>Output:</strong> [&quot;/a&quot;,&quot;/c/d&quot;,&quot;/c/f&quot;]
<strong>Explanation:</strong> Folders &quot;/a/b&quot; is a subfolder of &quot;/a&quot; and &quot;/c/d/e&quot; is inside of folder &quot;/c/d&quot; in our filesystem.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> folder = [&quot;/a&quot;,&quot;/a/b/c&quot;,&quot;/a/b/d&quot;]
<strong>Output:</strong> [&quot;/a&quot;]
<strong>Explanation:</strong> Folders &quot;/a/b/c&quot; and &quot;/a/b/d&quot; will be removed because they are subfolders of &quot;/a&quot;.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> folder = [&quot;/a/b/c&quot;,&quot;/a/b/ca&quot;,&quot;/a/b/d&quot;]
<strong>Output:</strong> [&quot;/a/b/c&quot;,&quot;/a/b/ca&quot;,&quot;/a/b/d&quot;]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= folder.length &lt;= 4 * 10<sup>4</sup></code></li>
	<li><code>2 &lt;= folder[i].length &lt;= 100</code></li>
	<li><code>folder[i]</code> contains only lowercase letters and <code>&#39;/&#39;</code>.</li>
	<li><code>folder[i]</code> always starts with the character <code>&#39;/&#39;</code>.</li>
	<li>Each folder name is <strong>unique</strong>.</li>
</ul>

<!-- description:end -->

## Solutions

#### Java

```java
class Solution {
    public List<String> removeSubfolders(String[] folder) {
        Arrays.sort(folder);
        List<String> ans = new ArrayList<>();
        ans.add(folder[0]);
        for (int i = 1; i < folder.length; ++i) {
            int m = ans.get(ans.size() - 1).length();
            int n = folder[i].length();
            if (m >= n
                || !(ans.get(ans.size() - 1).equals(folder[i].substring(0, m))
                    && folder[i].charAt(m) == '/')) {
                ans.add(folder[i]);
            }
        }
        return ans;
    }
}
```

#### JavaScript

```js
var removeSubfolders = function (folder) {
  // Step 1: Sort the array of folder paths lexicographically.
  // This ensures that any parent folder appears before its subfolders.
  folder.sort();

  // Step 2: Initialize an array to store the result with folders that aren't subfolders.
  const ans = [];

  // Step 3: Add the first folder to the result array since it can't be a subfolder of any previous one.
  ans.push(folder[0]);

  // Step 4: Iterate through the rest of the folders, starting from the second folder.
  for (let i = 1; i < folder.length; ++i) {
    // Get the length of the last added folder in the result array (potential parent folder).
    const m = ans[ans.length - 1].length;
    // Get the length of the current folder in the sorted list.
    const n = folder[i].length;

    // Step 5: Check if the current folder is a subfolder of the last added folder.
    // - If the last added folder's length is greater than or equal to the current folder,
    //   they can't have a parent-child relationship, so we add the current folder to ans.
    // - Otherwise, check if the current folder starts with the last folder in ans and
    //   has a '/' right after it, indicating it's a true subfolder.
    if (
      m >= n ||
      !(
        ans[ans.length - 1] === folder[i].substring(0, m) &&
        folder[i].charAt(m) === "/"
      )
    ) {
      // Add the current folder to the result array if it's not a subfolder.
      ans.push(folder[i]);
    }
  }

  // Step 6: Return the array of folders without subfolders.
  return ans;
};

// Example usage:
const folders = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"];
console.log(removeSubfolders(folders)); // Output: ["/a", "/c/d", "/c/f"]
```
