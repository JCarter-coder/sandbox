"use strict";
function isSubsequence(s, t) {
    let result = false;
    let indexS = 0;
    let indexT = 0;
    while (indexS < s.length && indexT < t.length) {
        if (s.charAt(indexS) === t.charAt(indexT))
            indexS++;
        if (indexS > s.length - 1) {
            result = true;
            break;
        }
        indexT++;
    }
    console.log(result);
    return result;
}
;
isSubsequence("abc", "ahbgdc");
isSubsequence("axc", "ahbgdc");
