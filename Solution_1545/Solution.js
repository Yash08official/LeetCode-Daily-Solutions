/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    // Calculate the length of the binary string S_n, which is 2^n - 1
    let len = Math.pow(2, n) - 1;
    
    // Helper recursive function to find the k-th bit
    const recur = (len, k) => {
        // Base case: If the length is 1, the only bit is '0'
        if (len === 1) {
            return '0';
        }

        // Calculate the middle index of the current binary string
        let half = Math.floor(len / 2);
        let middle = half + 1;

        // If k is the middle bit, return '1'
        if (k === middle) {
            return '1';
        } else if (k < middle) { // If k is in the left half, recursively search the left half
            return recur(half, k);
        } else { // If k is in the right half, recursively search the right half
            let ans = recur(half, 1 + len - k);
            // Flip the bit and return it
            return ans === '0' ? '1' : '0';
        }
    };
    
    // Call the recursive function and return the result
    return recur(len, k);
};
