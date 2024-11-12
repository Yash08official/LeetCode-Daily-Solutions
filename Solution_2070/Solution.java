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
