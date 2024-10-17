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