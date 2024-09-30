
class TrieNode {
    constructor() {
        this.links = new Array(26).fill(null);
        this.wordsEndingHere = 0;
        this.wordsStartingHere = 0;
    }
};

var Trie = function() {
    this.root = new TrieNode();
}

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let w of word) {
        const charIndex = w.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!node.links[charIndex]) {
            node.links[charIndex] = new TrieNode();
        }
        node = node.links[charIndex];
        node.wordsStartingHere++;
    }
    node.wordsEndingHere++;
};

/** 
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function(word) {
    let node = this.root;
    for (let w of word) {
        const charIndex = w.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!node.links[charIndex]) return 0;
        node = node.links[charIndex];
    }
    return node.wordsEndingHere;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function(prefix) {
    let node = this.root;
    for (let w of prefix) {
        const charIndex = w.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!node.links[charIndex]) return 0;
        node = node.links[charIndex];
    }
    return node.wordsStartingHere;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function(word) {
    let node = this.root;
    for (let w of word) {
        const charIndex = w.charCodeAt(0) - 'a'.charCodeAt(0);
        node = node.links[charIndex];
        node.wordsStartingHere--;
    }
    node.wordsEndingHere--;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */