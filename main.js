"use strict";
function maxChunksToSorted(arr) {
    let N = arr.length;
    let chunks = 0;
    let maxElement = 0;
    for (let i = 0; i < N; i++) {
        maxElement = Math.max(maxElement, arr[i]);
        if (maxElement === i)
            chunks++;
    }
    console.log(chunks);
    return chunks;
}
;
maxChunksToSorted([4, 3, 2, 1, 0]);
maxChunksToSorted([1, 0, 2, 3, 4]);
