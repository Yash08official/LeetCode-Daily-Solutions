# [670. Maximum Swap](https://leetcode.com/problems/maximum-swap)

## Description

<!-- description:start -->

<p>You are given an integer <code>num</code>. You can swap two digits at most once to get the maximum valued number.</p>

<p>Return <em>the maximum valued number you can get</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = 2736
<strong>Output:</strong> 7236
<strong>Explanation:</strong> Swap the number 2 and the number 7.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = 9973
<strong>Output:</strong> 9973
<strong>Explanation:</strong> No swap.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= num &lt;= 10<sup>8</sup></code></li>
</ul>

<!-- description:end -->

## Solutions

#### Java

```java
class Solution {
    public int maximumSwap(int num) {

        char [] arr = String.valueOf(num).toCharArray();

        int n = arr.length;

        int [] rightMax = new int [n];

        int maxPos = n-1;

        rightMax[n-1] = n-1;

        for(int i=n-2; i>=0; i--){
            if(arr[i] > arr[rightMax[i+1]]) maxPos = i;
            rightMax[i] = maxPos;
        }

        for (int i = 0; i<n; i++){
            if(arr[i] != arr[rightMax[i]]){
                char temp = arr[rightMax[i]];

                arr[rightMax[i]] = arr[i];
                arr[i] = temp;

                return Integer.valueOf(new String(arr));
            }
        }

        return num;
    }
}
```
