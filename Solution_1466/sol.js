/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let g = Array.from({ length: n }, () => []);
    for (let [a, b] of connections) {
        g[a].push([b, 1]);
        g[b].push([a, 0]);
    }
    return dfs(0, -1);

    function dfs(a, fa) {
        let ans = 0;
        for (let [b, c] of g[a]) {
            if (b !== fa) {
                ans += c + dfs(b, a);
            }
        }
        return ans;
    }
};