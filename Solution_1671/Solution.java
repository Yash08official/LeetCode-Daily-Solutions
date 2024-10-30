class Solution {
    public int minimumMountainRemovals(int[] nums) {
        int n = nums.length;
        
        // Arrays to store the length of the longest increasing subsequence (LIS)
        // up to each index from the start (left) and longest decreasing subsequence (LDS)
        // from each index to the end (right).
        int[] left = new int[n];
        int[] right = new int[n];
        
        // Initialize LIS and LDS arrays with 1, since each element by itself is a sequence of length 1
        Arrays.fill(left, 1);
        Arrays.fill(right, 1);

        // Calculate LIS for each element in 'nums' up to each index i
        for (int i = 1; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                // If nums[i] is greater than nums[j], we can extend the subsequence at j to i
                if (nums[i] > nums[j]) {
                    left[i] = Math.max(left[i], left[j] + 1);
                }
            }
        }

        // Calculate LDS for each element in 'nums' starting from each index i
        for (int i = n - 2; i >= 0; --i) {
            for (int j = i + 1; j < n; ++j) {
                // If nums[i] is greater than nums[j], we can extend the subsequence at j to i
                if (nums[i] > nums[j]) {
                    right[i] = Math.max(right[i], right[j] + 1);
                }
            }
        }

        int ans = 0;
        
        // Find the maximum mountain array length
        for (int i = 0; i < n; ++i) {
            // Only consider elements that can be valid peaks (both LIS and LDS > 1)
            if (left[i] > 1 && right[i] > 1) {
                // Calculate the length of the mountain centered at i
                ans = Math.max(ans, left[i] + right[i] - 1);
            }
        }

        // Minimum removals needed = total length of array - longest mountain length
        return n - ans;
    }
}
