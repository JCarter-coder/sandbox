"use strict";
function findWordsContaining(words, x) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            result.push(i);
        }
    }
    console.log(result);
    return result;
}
;
findWordsContaining(["leet", "code"], "e");
findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a");
findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z");
