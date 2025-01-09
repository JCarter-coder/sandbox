"use strict";
function prefixCount(words, pref) {
    let result = 0;
    let prefLength = pref.length;
    for (let word of words) {
        if (word.substring(0, prefLength) === pref)
            result++;
    }
    console.log(result);
    return result;
}
;
prefixCount(["pay", "attention", "practice", "attend"], "at");
prefixCount(["leetcode", "win", "loops", "success"], "code");
