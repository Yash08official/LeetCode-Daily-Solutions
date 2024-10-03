import java.util.HashMap;

class Solution {
    public int minSubarray(int[] nums, int p) {
        int n = nums.length;
        
        // Step 1: Calculate the total sum of the array elements
        long totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }

        // Step 2: Calculate the remainder of total sum when divided by p
        // If the remainder is zero, the sum is already divisible by p, so no subarray needs to be removed.
        int remainder = (int) (totalSum % p);
        if (remainder == 0) {
            return 0;  // No need to remove any subarray
        }

        // Step 3: HashMap to store prefix sums modulo p and their corresponding indices
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, -1);  // Initialize with remainder 0 at index -1 for easier calculations

        long prefixSum = 0;
        int minLength = n;  // Variable to store the minimum length of the subarray to remove

        // Step 4: Iterate over the array and calculate prefix sums
        for (int i = 0; i < n; i++) {
            // Add the current element to the prefix sum
            prefixSum += nums[i];
            
            // Calculate current prefix sum modulo p
            int currentMod = (int) (prefixSum % p);

            // Calculate the target remainder that needs to be removed (ensure the remainder is positive)
            int target = (currentMod - remainder + p) % p;

            // Step 5: Check if the target remainder exists in the prefixMap
            if (prefixMap.containsKey(target)) {
                // Calculate the length of the subarray that, when removed, makes the sum divisible by p
                minLength = Math.min(minLength, i - prefixMap.get(target));
            }

            // Step 6: Store the current prefix sum modulo p and its index in the prefixMap
            prefixMap.put(currentMod, i);
        }

        // Step 7: If a valid subarray was found, return its length, else return -1
        return minLength == n ? -1 : minLength;
    }
}
