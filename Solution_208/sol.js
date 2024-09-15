var Trie = function() {
    this.children = new Array(26);
    this.isEnd = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var node = this;
    for (var i = 0; i < word.length; ++i) {
        var c = word.charCodeAt(i);
        var idx = c - 'a'.charCodeAt(0);
        if (node.children[idx] == null) {
            node.children[idx] = new Trie();
        }
        node = node.children[idx];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var node = this.searchPrefix(word);
    return node != null && node.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var node = this.searchPrefix(prefix);
    return node != null;
};

Trie.prototype.searchPrefix = function(s) {
    var node = this;
    for (var i = 0; i < s.length; ++i) {
        var c = s.charCodeAt(i);
        var idx = c - 'a'.charCodeAt(0);
        if (node.children[idx] == null) {
            return null;
        }
        node = node.children[idx];
    }
    return node;
};