/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    if (timePoints.length > 1440) {
        return 0;
    }
    let n = timePoints.length;
    let nums = new Array(n + 1);
    for (let i = 0; i < n; ++i) {
        let t = timePoints[i].split(":");
        nums[i] = parseInt(t[0]) * 60 + parseInt(t[1]);
    }
    nums.sort((a, b) => a - b);
    nums[n] = nums[0] + 1440;
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= n; ++i) {
        ans = Math.min(ans, nums[i] - nums[i - 1]);
    }
    return ans;
};