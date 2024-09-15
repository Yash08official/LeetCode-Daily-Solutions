/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    var g = isConnected;
    var n = g.length;
    var vis = new Array(n).fill(false);
    var ans = 0;
    for (var i = 0; i < n; ++i) {
        if (!vis[i]) {
            dfs(i);
            ++ans;
        }
    }
    return ans;
};

function dfs(i) {
    vis[i] = true;
    for (var j = 0; j < g.length; ++j) {
        if (!vis[j] && g[i][j] === 1) {
            dfs(j);
        }
    }
}