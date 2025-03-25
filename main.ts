function checkValidCuts(n: number, rectangles: number[][]): boolean {
    const checkCuts = (
        rectangles: number[][],
        dim: number
    ): boolean => {
        let gapCount = 0;
        rectangles.sort((a,b) => a[dim] - b[dim]);
        let furthestEnd = rectangles[0][dim + 2];

        for (let i = 1; i < rectangles.length; i++) {
            let rect: number[] = rectangles[i];
            if (furthestEnd <= rect[dim]) gapCount++;

            furthestEnd = Math.max(furthestEnd, rect[dim + 2]);
        }

        return gapCount >= 2;
    }

    let result: boolean = (
        checkCuts(rectangles, 0) || checkCuts(rectangles, 1)
    );
    console.log(result);
    return result;
};

checkValidCuts(5,[[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]);
checkValidCuts(4,[[0,0,1,1],[2,0,3,4],[0,2,2,3],[3,0,4,3]]);
checkValidCuts(4,[[0,2,2,4],[1,0,3,2],[2,2,3,4],[3,0,4,2],[3,2,4,4]]);
