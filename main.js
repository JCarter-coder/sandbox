class TrieNode {
    constructor() {
        this.isEnd = false;
        this.children = new Array(26);
        this.children.fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (let c of [...word]) {
            if (current.children[c.charCodeAt(0) - 97] === null) {
                current.children[c.charCodeAt(0) - 97] = new TrieNode();
            }
            current = current.children[c.charCodeAt(0) - 97]
        }
        current.isEnd = true;
    }

    shortestRoot(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let c = word.charAt(i);
            if (current.children[c.charCodeAt(0) - 97] === null) {
                // there is not a corresponding word in trie
                return word;
            }
            current = current.children[c.charCodeAt(0) - 97];
            if (current.isEnd) {
                return word.substring(0, i + 1);
            }
        }
        // there is not a corresponding word in trie
        return word;
    }
}

var replaceWords = function(dictionary, sentence) {
    const wordArray = sentence.split(' ');

    let dictTrie = new Trie()
    for (let word of dictionary) {
        dictTrie.insert(word);
    }

    // replace each word in the sentence with
    // the corresponding shortest root
    for (let word = 0; word < wordArray.length; word++) {
        wordArray[word] = dictTrie.shortestRoot(wordArray[word]);
    }

    console.log(wordArray.join(" "));
};

replaceWords(["cat","bat", "rat"],"the cattle was rattled by the battery");
replaceWords(["a","b","c"],"aadsfasf absbs bbab cadsfafs");
