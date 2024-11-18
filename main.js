"use strict";
function decrypt(code, k) {
    let N = code.length;
    const decryptedCode = new Array(N).fill(0);
    let startIndex = 0;
    code = [...code, ...code];
    if (k > 0) {
        startIndex = 1;
    }
    else if (k < 0) {
        startIndex = N + k;
    }
    else if (k === 0) {
        console.log(decryptedCode);
        return decryptedCode;
    }
    for (let i = 0; i < N; i++) {
        let tempSum = 0;
        let counter = Math.abs(k);
        let tempIndex = startIndex++;
        while (counter-- > 0) {
            tempSum += code[tempIndex++];
            //console.log(tempSum);
        }
        decryptedCode[i] = tempSum;
    }
    //console.log(startIndex);
    //console.log(N);
    console.log(decryptedCode);
    return [];
}
;
decrypt([5, 7, 1, 4], 3);
decrypt([1, 2, 3, 4], 0);
decrypt([2, 4, 9, 3], -2);
