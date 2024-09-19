/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let p = new Map();
    let w = new Map();

    for (let e of equations) {
        p.set(e[0], e[0]);
        p.set(e[1], e[1]);
        w.set(e[0], 1.0);
        w.set(e[1], 1.0);
    }

    for (let i = 0; i < equations.length; ++i) {
        let e = equations[i];
        let a = e[0], b = e[1];
        let pa = find(a), pb = find(b);
        if (pa === pb) {
            continue;
        }
        p.set(pa, pb);
        w.set(pa, w.get(b) * values[i] / w.get(a));
    }

    let m = queries.length;
    let ans = new Array(m);
    for (let i = 0; i < m; ++i) {
        let c = queries[i][0], d = queries[i][1];
        ans[i] = !p.has(c) || !p.has(d) || find(c) !== find(d)
            ? -1.0
            : w.get(c) / w.get(d);
    }
    return ans;
};

function find(x) {
    if (p.get(x) !== x) {
        let origin = p.get(x);
        p.set(x, find(p.get(x)));
        w.set(x, w.get(x) * w.get(origin));
    }
    return p.get(x);
}