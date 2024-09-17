/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    let trie = new Trie();
    for (let i = 0; i < products.length; i++) {
        trie.insert(products[i], i);
    }
    let ans = [];
    for (let v of trie.search(searchWord)) {
        let t = [];
        for (let i of v) {
            t.push(products[i]);
        }
        ans.push(t);
    }
    return ans;
};

class Trie {
    constructor() {
        this.children = new Array(26).fill(null);
        this.v = [];
    }

    insert(w, i) {
        let node = this;
        for (let j = 0; j < w.length; j++) {
            let idx = w.charCodeAt(j) - 'a'.charCodeAt(0);
            if (node.children[idx] === null) {
                node.children[idx] = new Trie();
            }
            node = node.children[idx];
            if (node.v.length < 3) {
                node.v.push(i);
            }
        }
    }

    search(w) {
        let node = this;
        let n = w.length;
        let ans = new Array(n).fill(null).map(() => []);
        for (let i = 0; i < n; i++) {
            let idx = w.charCodeAt(i) - 'a'.charCodeAt(0);
            if (node.children[idx] === null) {
                break;
            }
            node = node.children[idx];
            ans[i] = node.v;
        }
        return ans;
    }
}