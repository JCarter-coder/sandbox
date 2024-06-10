var heightChecker = function(heights) {
    const comparedArray = heights.toSorted((a,b) => a - b);
    let notExpected = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== comparedArray[i]) {
            notExpected++;
        }
    }
    console.log(notExpected);
};

heightChecker([1,1,4,2,1,3]);
heightChecker([5,1,2,3,4]);
heightChecker([1,2,3,4,5]);
