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
