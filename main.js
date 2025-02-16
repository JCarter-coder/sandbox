"use strict";
function constructDistancedSequence(n) {
    const seq = new Array(2 * n - 1).fill(0);
    const isNumberUsed = new Array(n + 1);
    const findLexicographicallyLargestSequence = (currentIndex, resultSequence, isNumberUsed, targetNumber) => {
        if (currentIndex === resultSequence.length)
            return true;
        if (resultSequence[currentIndex] !== 0) {
            return findLexicographicallyLargestSequence(currentIndex + 1, resultSequence, isNumberUsed, targetNumber);
        }
        for (let numberToPlace = targetNumber; numberToPlace >= 1; numberToPlace--) {
            if (isNumberUsed[numberToPlace])
                continue;
            isNumberUsed[numberToPlace] = true;
            resultSequence[currentIndex] = numberToPlace;
            if (numberToPlace === 1) {
                if (findLexicographicallyLargestSequence(currentIndex + 1, resultSequence, isNumberUsed, targetNumber))
                    return true;
            }
            else if (currentIndex + numberToPlace < resultSequence.length &&
                resultSequence[currentIndex + numberToPlace] === 0) {
                resultSequence[currentIndex + numberToPlace] = numberToPlace;
                if (findLexicographicallyLargestSequence(currentIndex + 1, resultSequence, isNumberUsed, targetNumber))
                    return true;
                resultSequence[currentIndex + numberToPlace] = 0;
            }
            resultSequence[currentIndex] = 0;
            isNumberUsed[numberToPlace] = false;
        }
        return false;
    };
    findLexicographicallyLargestSequence(0, seq, isNumberUsed, n);
    console.log(seq);
    return seq;
}
;
constructDistancedSequence(3);
constructDistancedSequence(5);
