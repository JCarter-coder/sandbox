"use strict";
function isCircularSentence(sentence) {
    let ans = false;
    const sentenceArray = sentence.split(' ');
    if (sentenceArray[0].at(0) !==
        sentenceArray[sentenceArray.length - 1].at(-1)) {
        console.log(ans);
        return ans;
    }
    ;
    for (let i = 1; i < sentenceArray.length; i++) {
        if (sentenceArray[i].at(0) !==
            sentenceArray[i - 1].at(-1)) {
            console.log(ans);
            return ans;
        }
        ;
    }
    ans = true;
    console.log(ans);
    return ans;
}
;
isCircularSentence("leetcode exercises sound delightful");
isCircularSentence("eetcode");
isCircularSentence("Leetcode is cool");
