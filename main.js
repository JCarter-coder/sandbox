/**
 * @param {string[]} words
 * @return {number[]}
 */

class TrieNode {
    constructor() {
        this.children = {};
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for (let ch of word) {
            if (!node.children[ch]) node.children[ch] = new TrieNode();
            node = node.children[ch];
            node.count++;
        }
    }

    getPrefixScoreSum(word) {
        let node = this.root;
        let scoreSum = 0;

        for (let ch of word) {
            node = node.children[ch];
            scoreSum += node.count;
        }

        return scoreSum;
    }
}
var sumPrefixScores = function(words) {
    const trie = new Trie();

    for (let word of words) {
        trie.insert(word);
    }

    const result = [];

    for (let word of words) {
        result.push(trie.getPrefixScoreSum(word));
    }

    console.log(result);
};

sumPrefixScores(["abc","ab","bc","b"]);
sumPrefixScores(["abcd"]);
