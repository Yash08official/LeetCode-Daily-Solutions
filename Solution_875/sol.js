/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1, r = Math.pow(10, 9);
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        let s = 0;
        for (let x of piles) {
            s += Math.ceil(x / mid);
        }
        if (s <= h) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
};