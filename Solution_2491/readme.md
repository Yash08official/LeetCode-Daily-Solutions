# [2491. Divide Players Into Teams of Equal Skill](https://leetcode.com/problems/divide-players-into-teams-of-equal-skill)

## Description

<!-- description:start -->

<p>You are given a positive integer array <code>skill</code> of <strong>even</strong> length <code>n</code> where <code>skill[i]</code> denotes the skill of the <code>i<sup>th</sup></code> player. Divide the players into <code>n / 2</code> teams of size <code>2</code> such that the total skill of each team is <strong>equal</strong>.</p>

<p>The <strong>chemistry</strong> of a team is equal to the <strong>product</strong> of the skills of the players on that team.</p>

<p>Return <em>the sum of the <strong>chemistry</strong> of all the teams, or return </em><code>-1</code><em> if there is no way to divide the players into teams such that the total skill of each team is equal.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> skill = [3,2,5,1,3,4]
<strong>Output:</strong> 22
<strong>Explanation:</strong> 
Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> skill = [3,4]
<strong>Output:</strong> 12
<strong>Explanation:</strong> 
The two players form a team with a total skill of 7.
The chemistry of the team is 3 * 4 = 12.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> skill = [1,1,2,3]
<strong>Output:</strong> -1
<strong>Explanation:</strong> 
There is no way to divide the players into teams such that the total skill of each team is equal.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= skill.length &lt;= 10<sup>5</sup></code></li>
	<li><code>skill.length</code> is even.</li>
	<li><code>1 &lt;= skill[i] &lt;= 1000</code></li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Sorting

To make all 2-person teams have equal skill points, the minimum value must match the maximum value. Therefore, we sort the `skill` array, and then use two pointers $i$ and $j$ to point to the beginning and end of the array respectively, match them in pairs, and judge whether their sum is the same number.

If not, it means that the skill points cannot be equal, and we directly return $-1$. Otherwise, we add the chemical reaction to the answer.

At the end of the traversal, we return the answer.

The time complexity is $O(n \times \log n)$, and the space complexity is $O(\log n)$. Where $n$ is the length of the `skill` array.

### Java

```java
class Solution {
    public long dividePlayers(int[] skill) {

        // Sort the skill array in ascending order
        Arrays.sort(skill);
        int n = skill.length; // Get the number of players

        //And now I calculate the target skill for each team
        long target = skill[0] + skill[n - 1]; // Sum of the smallest and largest skill
        long ans = 0; // Set the total chemistry sum

        //now two pointers to pair players
        for (int i = 0, j = n - 1; i < j; ++i, --j) {

            // Check if the current pair skill sum matches the target
            if (skill[i] + skill[j] != target) {
                return -1; // Return -1 if teams cannot be formed with equal skill
            }
            // Calculate the chemistry for the current team and add to total
            ans += (long) skill[i] * skill[j]; // Chemistry is the product of skills
        }

        // Return the total chemistry of all teams
        return ans;
    }
}
```

### JavaScript

```js
/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  // Sort the  array in ascending order
  skill.sort((a, b) => a - b);
  // Get the number of players
  const n = skill.length;

  //Now ,Calculate the target skill for each team
  const target = skill[0] + skill[n - 1]; // Sum of the smallest and largest skill
  let ans = 0; // the total chemistry sum

  //  Use two pointers to pair players
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    // Check if the current pair skill sum matches the target
    if (skill[i] + skill[j] !== target) {
      return -1; // Return -1 if teams cannot be formed with equal skill
    }
    // Calculate the chemistry for the current team and add to total
    ans += skill[i] * skill[j]; // Chemistry is the product of skills
  }

  // Return the total chemistry of all teams
  return ans;
};

console.log(dividePlayers([3, 2, 5, 1, 3, 4]));
console.log(dividePlayers([3, 4]));
console.log(dividePlayers([1, 1, 2, 3]));
```
