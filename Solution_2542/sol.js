/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let n = nums1.length;
    let nums = new Array(n);
    for (let i = 0; i < n; ++i) {
        nums[i] = [nums1[i], nums2[i]];
    }
    nums.sort((a, b) => b[1] - a[1]);
    let ans = 0, s = 0;
    let q = [];
    for (let i = 0; i < n; ++i) {
        s += nums[i][0];
        q.push(nums[i][0]);
        q.sort((a, b) => a - b);
        if (q.length === k) {
            ans = Math.max(ans, s * nums[i][1]);
            s -= q.shift();
        }
    }
    return ans;
};