/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    // Initialize a variable to store the total number of good pairs
    let count = 0;
    
    // Outer loop to iterate through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Inner loop to iterate through the remaining elements in the array
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the current element is equal to the current element in the inner loop
            if (nums[i] === nums[j]) {
                // If they are equal, increment the count variable
                count++;
            }
        }
    }
    
    // Return the final value of count, which represents the total number of good pairs
    return count;
};