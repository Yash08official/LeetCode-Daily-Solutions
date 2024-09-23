/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    let ss = new Set(dictionary);
    let n = s.length;
    let f = new Array(n + 1).fill(Infinity);
    f[0] = 0;
    for (let i = 1; i <= n; ++i) {
        f[i] = f[i - 1] + 1;
        for (let j = 0; j < i; ++j) {
            if (ss.has(s.substring(j, i))) {
                f[i] = Math.min(f[i], f[j]);
            }
        }
    }
    return f[n];
};