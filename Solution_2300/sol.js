/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    let n = spells.length, m = potions.length;
    let ans = new Array(n).fill(0);
    for (let i = 0; i < n; ++i) {
        let left = 0, right = m;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (spells[i] * potions[mid] >= success) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        ans[i] = m - left;
    }
    return ans;
};