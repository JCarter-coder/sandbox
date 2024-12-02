"use strict";
function isPrefixOfWord(sentence, searchWord) {
    const stringArray = sentence.split(' ');
    let ans = -1;
    for (let word of stringArray) {
        if (word.startsWith(searchWord)) {
            ans = stringArray.indexOf(word) + 1;
            break;
        }
    }
    console.log(stringArray);
    console.log(ans);
    return ans;
}
;
isPrefixOfWord("i love eating burger", "burg");
isPrefixOfWord("this problem is an easy problem", "pro");
isPrefixOfWord("i am tired", "you");
