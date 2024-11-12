# Meeting Rooms

Given an array arr[][] such that arr[i][0] is the starting time of ith meeting and arr[i][1] is the ending time of ith meeting, the task is to check if it is possible for a person to attend all the meetings such that he can attend only one meeting at a particular time.

Note: A person can attend a meeting if its starting time is greater than or equal to the previous meeting's ending time.

**Examples:**

```bash
Input: arr[][] = [[1, 4], [10, 15], [7, 10]]
Output: true
Explanation: Since all the meetings are held at different times, it is possible to attend all the meetings.
```

```bash
Input: arr[][] = [[2, 4], [9, 12], [6, 10]]
Output: false
Explanation: It is not possible to attend the second and third meetings simultaneously.
```

**Constraints:**
1 ≤ arr.size() ≤ 105
0 ≤ arr[i] ≤ 2\*106

### Solution

#### Java

```java
class Solution {
    static boolean canAttend(int[][] arr) {
        Arrays.sort(arr,(o1,o2)->o1[1]-o2[1]);
        int prev=-1;
        for(int i[]:arr){
            if(i[0]>=prev)   prev=i[1];
            else    return false;
        }
        return true;
    }
}
```
