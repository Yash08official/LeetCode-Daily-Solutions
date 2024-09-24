/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    let s = new Set();
    for (let x of arr1) {
        for (; x > 0; x = Math.floor(x / 10)) {
            s.add(x);
        }
    }
    let ans = 0;
    for (let x of arr2) {
        for (; x > 0; x = Math.floor(x / 10)) {
            if (s.has(x)) {
                ans = Math.max(ans, String(x).length);
                break;
            }
        }
    }
    return ans;
};