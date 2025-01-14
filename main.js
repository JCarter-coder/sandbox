"use strict";
function findThePrefixCommonArray(A, B) {
    const N = A.length;
    const arrayA = new Array(N + 1).fill(0);
    const arrayB = new Array(N + 1).fill(0);
    const result = new Array();
    let count = 0;
    for (let i = 0; i < N; i++) {
        arrayA[A[i]] = 1;
        arrayB[B[i]] = 1;
        //console.log(arrayA);
        //console.log(arrayB);
        if (arrayA[A[i]] === arrayB[A[i]])
            count++;
        if (arrayB[B[i]] === arrayA[B[i]] &&
            B[i] !== A[i])
            count++;
        result.push(count);
    }
    console.log(result);
    return result;
}
;
findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]);
findThePrefixCommonArray([2, 3, 1], [3, 1, 2]);
