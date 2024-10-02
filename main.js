/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const orderedArr = arr.toSorted((a,b) => a - b);
    const ranks = {};
    let rank = 1;
    for (let i = 0; i < orderedArr.length; i++) {
        if (!ranks[orderedArr[i]]) ranks[orderedArr[i]] = rank++;
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = ranks[arr[i]];
    }
    console.log(arr);
};

arrayRankTransform([40,10,20,30]);
arrayRankTransform([100,100,100]);
arrayRankTransform([37,12,28,9,100,56,80,5,12]);
