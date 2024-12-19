function maxChunksToSorted(arr: number[]): number {
    let N: number = arr.length;
    let chunks: number = 0;
    let maxElement: number = 0;

    for (let i = 0; i < N; i++) {
        maxElement = Math.max(maxElement, arr[i]);

        if (maxElement === i) chunks++;
    }

    console.log(chunks);
    return chunks;
};

maxChunksToSorted([4,3,2,1,0]);
maxChunksToSorted([1,0,2,3,4]);
