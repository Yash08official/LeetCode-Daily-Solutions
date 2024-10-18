/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    
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
