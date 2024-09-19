/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    let memo = {};

    function dfs(exp) {
        if (memo[exp]) {
            return memo[exp];
        }
        let ans = [];
        if (exp.length < 3) {
            ans.push(parseInt(exp));
            return ans;
        }
        for (let i = 0; i < exp.length; ++i) {
            let c = exp.charAt(i);
            if (c === '-' || c === '+' || c === '*') {
                let left = dfs(exp.substring(0, i));
                let right = dfs(exp.substring(i + 1));
                for (let a of left) {
                    for (let b of right) {
                        if (c === '-') {
                            ans.push(a - b);
                        } else if (c === '+') {
                            ans.push(a + b);
                        } else {
                            ans.push(a * b);
                        }
                    }
                }
            }
        }
        memo[exp] = ans;
        return ans;
    }

    return dfs(expression);
};