"use strict";
function numEquivDominoPairs(dominoes) {
    let result = 0;
    const hashSet = new Set();
    for (let i = 0; i < dominoes.length; i++) {
        if (!(hashSet.has(dominoes[i].toString()) ||
            hashSet.has(dominoes[i].reverse().toString()))) {
            hashSet.add(dominoes[i].toString());
            hashSet.add(dominoes[i].reverse().toString());
        }
        else {
            result++;
        }
    }
    console.log(result);
    return result;
}
;
numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]]);
numEquivDominoPairs([[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]]);
