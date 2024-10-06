/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // Lengths of the input strings
    const n = s1.length;
    const m = s2.length;

    // If s1 is longer than s2, it's impossible to find a permutation
    if (n > m) {
        return false;
    }

    // Frequency arrays for characters 'a' to 'z'
    const cnt1 = new Array(26).fill(0); // Frequency for s1
    const cnt2 = new Array(26).fill(0); // Frequency for the current window in s2

    // Initialize the frequency counts for s1 and the first window of s2
    for (let i = 0; i < n; i++) {
        cnt1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++; // Increment frequency for s1
        cnt2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++; // Increment frequency for the first window in s2
    }

    // Check if the initial window's frequency matches that of s1
    if (arraysEqual(cnt1, cnt2)) {
        return true;
    }

    // Slide the window across s2
    for (let i = n; i < m; i++) {
        // Add the new character to the current window
        cnt2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        // Remove the character that is sliding out of the window
        cnt2[s2.charCodeAt(i - n) - 'a'.charCodeAt(0)]--;

        // Check if the current window matches s1's frequency
        if (arraysEqual(cnt1, cnt2)) {
            return true;
        }
    }

    // No valid permutation found in any window
    return false;
};

// Helper function to compare frequency arrays
function arraysEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(checkInclusion("ab", "eidbaooo")); // Output: true
console.log(checkInclusion("ab", "eidboaoo")); // Output: false
