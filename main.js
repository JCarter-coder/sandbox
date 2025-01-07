"use strict";
function stringMatching(words) {
    const N = words.length;
    const memo = new Set();
    const result = new Array();
    for (let i = 0; i < N; i++) {
        let wordLength = words[i].length;
        for (let j = 0; j < N; j++) {
            if (words[i] === words[j])
                continue;
            if (words[i].length < words[j].length) {
                let index = 0;
                while (index + wordLength <= words[j].length) {
                    if (words[j].substring(index, index + wordLength) === words[i] &&
                        !memo.has(words[i])) {
                        memo.add(words[i]);
                        result.push(words[i]);
                        break;
                    }
                    index++;
                }
            }
        }
    }
    console.log(result);
    return result;
}
;
stringMatching(["mass", "as", "hero", "superhero"]);
stringMatching(["leetcode", "et", "code"]);
stringMatching(["blue", "green", "bu"]);
stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"]);
