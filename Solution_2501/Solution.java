class Solution {
    public int longestSquareStreak(int[] nums) {
        
        int max = -1;  // Initialize max to -1 to track the longest square streak of length >= 2

        Map<Integer, Integer> Streaks = new HashMap<>();  // Map to store streak lengths for each number
        Arrays.sort(nums);  // Sort the array to process numbers in ascending order

        // Iterate over each number in the sorted array
        for (int i : nums) {
            
            int root = (int)Math.sqrt(i);  // Calculate the integer square root of the current number

            // Check if the current number is a perfect square and its root has a streak
            if (root * root == i && Streaks.containsKey(root)) {
                // If true, update the streak for current number by incrementing the streak of its root
                Streaks.put(i, Streaks.get(root) + 1);
                
                // Update max if this streak is the longest found so far
                max = Math.max(Streaks.get(i), max);
            } else {
                // If the current number starts a new streak, set its streak length to 1
                Streaks.put(i, 1);
            }
        }
        
        // Return the longest streak found if it's 2 or more, otherwise -1
        return max;
    }
}
