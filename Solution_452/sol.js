/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);
    let ans = 0;
    let last = Number.MIN_SAFE_INTEGER;
    for (let p of points) {
        let a = p[0], b = p[1];
        if (a > last) {
            ++ans;
            last = b;
        }
    }
    return ans;
};