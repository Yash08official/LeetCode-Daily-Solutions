/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stackNum = [];
    let stackRes = [];
    let num = 0;
    let res = "";

    for (let c of s) {
        if (c >= '0' && c <= '9') {
            num = num * 10 + parseInt(c);
        } else if (c === '[') {
            stackNum.push(num);
            stackRes.push(res);
            num = 0;
            res = "";
        } else if (c === ']') {
            let t = "";
            for (let i = 0, n = stackNum.pop(); i < n; ++i) {
                t += res;
            }
            res = stackRes.pop() + t;
        } else {
            res += c;
        }
    }

    return res;
};