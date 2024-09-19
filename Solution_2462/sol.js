/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let n = costs.length;
    let ans = 0;
    if (candidates * 2 >= n) {
        costs.sort((a, b) => a - b);
        for (let i = 0; i < k; ++i) {
            ans += costs[i];
        }
        return ans;
    }
    let pq = [];
    for (let i = 0; i < candidates; ++i) {
        pq.push([costs[i], i]);
        pq.push([costs[n - i - 1], n - i - 1]);
    }
    pq.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    let l = candidates, r = n - candidates - 1;
    while (k-- > 0) {
        let p = pq.shift();
        ans += p[0];
        if (l > r) {
            continue;
        }
        if (p[1] < l) {
            pq.push([costs[l], l++]);
        } else {
            pq.push([costs[r], r--]);
        }
        pq.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    }
    return ans;
};