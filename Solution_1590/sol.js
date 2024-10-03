/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    let n = nums.length;
    
    // Step 1: Calculate the total sum of the array
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    
    // Step 2: Calculate the remainder of total sum modulo p
    let remainder = totalSum % p;
    if (remainder === 0) {
        return 0;  // No need to remove any subarray
    }

    // Step 3: Use a Map to store prefix sums modulo p and their corresponding indices
    let prefixMap = new Map();
    prefixMap.set(0, -1);  // Initialize with remainder 0 at index -1

    let prefixSum = 0;
    let minLength = n;  // Variable to store the minimum length of the subarray to remove
    
    // Step 4: Iterate over the array
    for (let i = 0; i < n; i++) {
        // Add the current element to the prefix sum
        prefixSum += nums[i];
        
        // Calculate the current prefix sum modulo p
        let currentMod = prefixSum % p;
        
        // Calculate the target remainder we want to remove (ensure it's positive)
        let target = (currentMod - remainder + p) % p;
        
        // Step 5: Check if the target remainder exists in the prefixMap
        if (prefixMap.has(target)) {
            // Calculate the length of the subarray that, when removed, makes the sum divisible by p
            minLength = Math.min(minLength, i - prefixMap.get(target));
        }

        // Step 6: Store the current prefix sum modulo p and its index in the Map
        prefixMap.set(currentMod, i);
    }

    // Step 7: If a valid subarray was found, return its length, else return -1
    return minLength === n ? -1 : minLength;
};
