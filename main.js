var relativeSortArray = function(arr1, arr2) {
    const seen = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!seen[arr1[i]]) {
            seen[arr1[i]] = 1;
        } else seen[arr1[i]]++;
    }
    arr1 = [];
    // rebuild arr1 with arr2 ordering
    for (let i = 0; i < arr2.length; i++) {
        let seenKey = arr2[i];
        while (seen[seenKey]-- > 0) {
            arr1.push(seenKey);
        }
    }
    for (const [key, value] of Object.entries(seen)) {
        let tempVal = value;
        while (tempVal > 0) {
            arr1.push(parseInt(key));
            tempVal--;
        }
    }
    console.log(arr1);
};

relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]);
relativeSortArray([28,6,22,8,44,17],[22,28,8,6]);
