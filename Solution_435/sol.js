/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]); // Sort intervals by their end time
    let t = intervals[0][1], ans = 0;
    for (let i = 1; i < intervals.length; ++i) {
        if (intervals[i][0] >= t) {
            t = intervals[i][1];
        } else {
            ++ans;
        }
    }
    return ans;
};