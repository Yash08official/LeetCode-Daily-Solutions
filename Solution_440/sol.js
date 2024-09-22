/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    let curr = 1;
    k--;
    while (k > 0) {
        let cnt = count(curr, n);
        if (k >= cnt) {
            k -= cnt;
            curr++;
        } else {
            k--;
            curr *= 10;
        }
    }
    return curr;
};

function count(curr, n) {
    let next = curr + 1;
    let cnt = 0;
    while (curr <= n) {
        cnt += Math.min(n - curr + 1, next - curr);
        next *= 10;
        curr *= 10;
    }
    return cnt;
}