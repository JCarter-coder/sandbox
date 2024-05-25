var wordBreak = function(s, wordDict) {
    let result = [];

    const backtrack = (current, list) => {
        if (current === s.length) {
            result.push(list.join(" "));
        }
        for (let i = current + 1; i <= s.length; i++) {
            const subString = s.substring(current, i);
            if (wordDict.includes(subString)) {
                backtrack(i, list.concat(subString));
            }
        }
    }
    backtrack(0, []);
    console.log(result);
    return result;
};

wordBreak("catsanddog",["cat","cats","and","sand","dog"]);
wordBreak("pineapplepenapple",["apple","pen","applepen","pine","pineapple"]);
wordBreak("catsandog",["cats","dog","sand","and","cat"]);
