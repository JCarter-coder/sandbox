"use strict";
function minimumLength(s) {
    /* if (s.length < 3) {
        console.log(s.length);
        return s.length;
    } */
    const memo = {};
    for (let i = 0; i < s.length; i++) {
        memo[s.charAt(i)] > 0 ? memo[s.charAt(i)]++ : memo[s.charAt(i)] = 1;
    }
    let result = s.length;
    for (let key of Object.keys(memo)) {
        while (memo[key] > 2) {
            memo[key] -= 2;
            result -= 2;
        }
    }
    console.log(result);
    return result;
}
;
minimumLength("abaacbcbb");
minimumLength("aa");
