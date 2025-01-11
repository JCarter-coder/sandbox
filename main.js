"use strict";
function canConstruct(s, k) {
    const N = s.length;
    // not possible
    if (N < k) {
        console.log('false');
        return false;
    }
    // exactly possible
    if (N === k) {
        console.log('true');
        return true;
    }
    const sLetters = new Array(26).fill(0);
    const evensIndices = new Array();
    const oddsIndices = new Array();
    for (let i = 0; i < N; i++) {
        sLetters[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < sLetters.length; i++) {
        if (sLetters[i] !== 0) {
            sLetters[i] % 2 === 0 && sLetters ?
                evensIndices.push(i) :
                oddsIndices.push(i);
        }
    }
    //console.log(sLetters);
    console.log(evensIndices);
    console.log(oddsIndices);
    if (oddsIndices.length <= k) {
        console.log('true');
        return true;
    }
    else {
        console.log('false');
        return false;
    }
}
;
canConstruct("annabelle", 2);
canConstruct("leetcode", 3);
canConstruct("true", 4);
canConstruct("messi", 3);
