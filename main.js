/**
 * @param {string[]} words
 * @return {string}
 */

class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let node = this.root;
        for (let x of word) {
            if (node[x] == null) node[x] = {};
            node = node[x];
        }
        node.isWord = true;
    }

    traverse(word) {
        let node = this.root;
        for (let x of word) {
            if (node[x] == null) return null;
            node = node[x];
        }
        return node;
    }

    search(word) {
        let node = this.traverse(word);
        return node != null && node.isWord === true;
    }

    startsWith(prefix) {
        let node = this.traverse(prefix);
        return node != null;
    }
}

var longestWord = function(words) {
    let dfs = (node, word) => {
        let maxWord = word;
        for (let x in node) {
            if (node[x].isWord) {
                let res = dfs(node[x], word + x);
                if (res.length > maxWord.length ||
                    res.length === maxWord.length &&
                    res < maxWord
                ) maxWord = res;
            }
        }
        return maxWord;
    }

    let t = new Trie();
    for (let word of words) {
        t.insert(word);
    }

    console.log(dfs(t.root, ""));
};

longestWord(["k","ki","kir","kira","kiran"]);
longestWord(["a","banana","app","appl","ap","apply","apple"]);
longestWord(["abc","bc","ab","qwe"]);
