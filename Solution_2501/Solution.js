/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    let max = -1;  // Initialize max to -1 to track the longest square streak of length >= 2
    const Streaks = new Map();  // Map to store streak lengths for each number

    nums.sort((a, b) => a - b);  // Sort the array in ascending order

    // Iterate over each number in the sorted array
    for (const num of nums) {
        const root = Math.floor(Math.sqrt(num));  // Calculate the integer square root of the current number

        // Check if the current number is a perfect square and its root has a streak
        if (root * root === num && Streaks.has(root)) {
            // If true, update the streak for current number by incrementing the streak of its root
            Streaks.set(num, Streaks.get(root) + 1);
            
            // Update max if this streak is the longest found so far
            max = Math.max(Streaks.get(num), max);
        } else {
            // If the current number starts a new streak, set its streak length to 1
            Streaks.set(num, 1);
        }
    }
    
    // Return the longest streak found if it's 2 or more, otherwise -1
    return max;
};
