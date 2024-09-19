/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let m = grid.length, n = grid[0].length;
    let q = [];
    let cnt = 0;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 1) {
                ++cnt;
            } else if (grid[i][j] === 2) {
                q.push([i, j]);
            }
        }
    }
    const dirs = [-1, 0, 1, 0, -1];
    let ans = 0;
    while (q.length > 0 && cnt > 0) {
        for (let k = q.length; k > 0; --k) {
            let p = q.shift();
            for (let d = 0; d < 4; ++d) {
                let x = p[0] + dirs[d], y = p[1] + dirs[d + 1];
                if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 1) {
                    grid[x][y] = 2;
                    q.push([x, y]);
                    --cnt;
                }
            }
        }
        ++ans;
    }
    return cnt > 0 ? -1 : ans;
};