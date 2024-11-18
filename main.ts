function decrypt(code: number[], k: number): number[] {
    let N: number = code.length;
    const decryptedCode = new Array(N).fill(0);
    let startIndex: number = 0;
    code = [...code, ...code];

    if (k > 0) {
        startIndex = 1;
    } else if (k < 0) {
        startIndex = N + k;
    } else if (k === 0) {
        console.log(decryptedCode);
        return decryptedCode;
    }

    for (let i = 0; i < N; i++) {
        let tempSum = 0;
        let counter = Math.abs(k);
        let tempIndex = startIndex++;
        while (counter-- > 0) {
            tempSum += code[tempIndex++];
        }
        decryptedCode[i] = tempSum;
    }
    
    
    console.log(decryptedCode);
    return decryptedCode;
};

decrypt([5,7,1,4],3);
decrypt([1,2,3,4],0);
decrypt([2,4,9,3],-2);
