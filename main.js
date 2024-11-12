"use strict";
function maximumBeauty(items, queries) {
    let ans = new Array(queries.length).fill(0);
    items.sort((a, b) => a[0] - b[0]);
    let queriesWithIndices = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
        queriesWithIndices[i] = [queries[i], i];
    }
    queriesWithIndices.sort((a, b) => a[0] - b[0]);
    let itemIndex = 0;
    let maxBeauty = 0;
    for (let i = 0; i < queries.length; i++) {
        let query = queriesWithIndices[i][0];
        let originalIndex = queriesWithIndices[i][1];
        while (itemIndex < items.length && items[itemIndex][0] <= query) {
            maxBeauty = Math.max(maxBeauty, items[itemIndex][1]);
            itemIndex++;
        }
        ans[originalIndex] = maxBeauty;
    }
    console.log(queriesWithIndices);
    console.log(ans);
    return ans;
}
;
maximumBeauty([[1, 2], [3, 2], [2, 4], [5, 6], [3, 5]], [1, 2, 3, 4, 5, 6]);
maximumBeauty([[1, 2], [1, 2], [1, 3], [1, 4]], [1]);
maximumBeauty([[10, 1000]], [5]);
