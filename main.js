"use strict";
function wordSubsets(words1, words2) {
    /* const subsetChars: number[] = new Array(26);
    const result = new Array();

    for (let word of words2) {
        const wordCharSet: letterCount = {};
        for (let char of word) {
            !wordCharSet[char] ? wordCharSet[char] = 1 : wordCharSet[char]++;
        }
        for (const [key, value] of Object.entries(wordCharSet)) {
            let char = key.charCodeAt(0) - 97;
            subsetChars[char] = Math.max(subsetChars[char] || 0, value);
        }
    }

    for (let word of words1) {
        const tempSet = subsetChars.slice();
        for (let char of word) {
            tempSet[char.charCodeAt(0) - 97]--;
            if (tempSet[char.charCodeAt(0) - 97] < 0) break;
        }
        let isSetLengthZero = tempSet.filter((element) => (
            !Number.isNaN(element)
        ));
        //if (isSetLengthZero.length === 0) result.push(word);
        console.log(`${word}: ${isSetLengthZero.length}`);
        console.log(tempSet);
    } */
    //console.log(subsetChars);
    const count = (S) => {
        const ans = new Array(26).fill(0);
        for (let c of S) {
            ans[c.charCodeAt(0) - 97]++;
        }
        return ans;
    };
    const bmax = count("");
    for (let b of words2) {
        let bCount = count(b);
        for (let i = 0; i < 26; i++) {
            bmax[i] = Math.max(bmax[i], bCount[i]);
        }
    }
    const ans = new Array();
    search: for (let a of words1) {
        const aCount = count(a);
        for (let i = 0; i < 26; i++) {
            if (aCount[i] < bmax[i])
                continue search;
        }
        ans.push(a);
    }
    console.log(ans);
    return ans;
}
;
wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"]);
wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["l", "e"]);
