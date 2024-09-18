/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let n = senate.length;
    let qr = [];
    let qd = [];
    for (let i = 0; i < n; ++i) {
        if (senate.charAt(i) === 'R') {
            qr.push(i);
        } else {
            qd.push(i);
        }
    }
    while (qr.length > 0 && qd.length > 0) {
        if (qr[0] < qd[0]) {
            qr.push(qr[0] + n);
        } else {
            qd.push(qd[0] + n);
        }
        qr.shift();
        qd.shift();
    }
    return qr.length === 0 ? "Dire" : "Radiant";
};