/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    var base = 131;
    var mul = 1;
    var mod = Math.pow(10, 9) + 7;
    var prefix = 0, suffix = 0;
    var idx = 0;
    var n = s.length;
    for (var i = 0; i < n; ++i) {
        var t = s.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
        prefix = (prefix * base + t) % mod;
        suffix = (suffix + t * mul) % mod;
        mul = (mul * base) % mod;
        if (prefix === suffix) {
            idx = i + 1;
        }
    }
    if (idx === n) {
        return s;
    }
    return s.substring(idx).split('').reverse().join('') + s;
};