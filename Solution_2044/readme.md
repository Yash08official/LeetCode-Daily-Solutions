# [2044. Count Number of Maximum Bitwise-OR Subsets](https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets)

## Description

<!-- description:start -->

<p>Given an integer array <code>nums</code>, find the <strong>maximum</strong> possible <strong>bitwise OR</strong> of a subset of <code>nums</code> and return <em>the <strong>number of different non-empty subsets</strong> with the maximum bitwise OR</em>.</p>

<p>An array <code>a</code> is a <strong>subset</strong> of an array <code>b</code> if <code>a</code> can be obtained from <code>b</code> by deleting some (possibly zero) elements of <code>b</code>. Two subsets are considered <strong>different</strong> if the indices of the elements chosen are different.</p>

<p>The bitwise OR of an array <code>a</code> is equal to <code>a[0] <strong>OR</strong> a[1] <strong>OR</strong> ... <strong>OR</strong> a[a.length - 1]</code> (<strong>0-indexed</strong>).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,1]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The maximum possible bitwise OR of a subset is 3. There are 2 subsets with a bitwise OR of 3:
- [3]
- [3,1]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,2,2]
<strong>Output:</strong> 7
<strong>Explanation:</strong> All non-empty subsets of [2,2,2] have a bitwise OR of 2. There are 2<sup>3</sup> - 1 = 7 total subsets.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,1,5]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The maximum possible bitwise OR of a subset is 7. There are 6 subsets with a bitwise OR of 7:
- [3,5]
- [3,1,5]
- [3,2,5]
- [3,2,1,5]
- [2,5]
- [2,1,5]</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 16</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>

<!-- description:end -->

## Solutions

### Java

```java
class Solution
{
    public int countMaxOrSubsets(int[] nums)
    {
        int maxOr = 0;

        // Step 1: Calculate the maximum OR value by OR-ing all elements in the array
        // This will give us the target maximum OR that we want to match with subsets
        for (int i : nums) maxOr |= i;

        // Step 2: Call the recursive function to count how many subsets have OR equal to maxOr
        return solve(0, nums, 0, maxOr);
    }

    // Recursive helper function to explore all subsets
    private int solve(int i, int[] nums, int currentOr, int maxOr)
    {
        // Base case: If we have considered all elements (i == nums.length)
        if (i == nums.length)
        {
            // Check if the OR value of the current subset equals the maximum OR value
            if (currentOr == maxOr) return 1; // If yes, count this subset
            return 0; // Otherwise, it's not a valid subset
        }

        int ans = 0;

        // Option 1: Include the current element (nums[i]) in the subset
        ans += solve(i + 1, nums, currentOr | nums[i], maxOr);

        // Option 2: Exclude the current element from the subset
        ans += solve(i + 1, nums, currentOr, maxOr);

        // Return the total count of valid subsets
        return ans;
    }
}
```

### JavaScript

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  // Step 1: Calculate the maximum OR value by OR-ing all elements in the array
  let maxOr = 0;
  for (let num of nums) {
    maxOr |= num; // Perform bitwise OR with each number in the array
  }

  // Step 2: Recursive function to count subsets with maximum OR
  const solve = (index, currentOr) => {
    // Base case: If we've considered all elements
    if (index === nums.length) {
      // Check if the OR value of the current subset equals the maximum OR value
      return currentOr === maxOr ? 1 : 0;
    }

    // Option 1: Include the current element in the subset
    let include = solve(index + 1, currentOr | nums[index]);

    // Option 2: Exclude the current element from the subset
    let exclude = solve(index + 1, currentOr);

    // Return the total count of valid subsets
    return include + exclude;
  };

  // Start the recursion from the first element, with initial OR as 0
  return solve(0, 0);
};
```
