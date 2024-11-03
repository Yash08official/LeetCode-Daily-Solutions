/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    // Step 1: Check if lengths are the same
    if (s.length !== goal.length) {
        return false;
    }
    
    // Step 2: Concatenate s with itself
    const doubleS = s + s;
    
    // Step 3: Check if goal is a substring of doubleS
    return doubleS.includes(goal);
};
