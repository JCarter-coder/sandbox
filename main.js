/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const numArray = num.toString().split('');
    let N = numArray.length;
    let maxDigitIndex = -1;
    let swapIndex1 = -1;
    let swapIndex2 = -1;

    for (let i = N - 1; i >= 0; i--) {
        if (maxDigitIndex === -1 || numArray[i] > numArray[maxDigitIndex]) {
            maxDigitIndex = i;
        } else if (numArray[i] < numArray[maxDigitIndex]) {
            swapIndex1 = i;
            swapIndex2 = maxDigitIndex;
        }
    }

    if (swapIndex1 != -1 && swapIndex2 != -1) {
        let temp = numArray[swapIndex1];
        numArray[swapIndex1] = numArray[swapIndex2];
        numArray[swapIndex2] = temp;
    }

    console.log(Number(numArray.join('')));
};

maximumSwap(2736);
maximumSwap(9973);
