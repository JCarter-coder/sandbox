var longestCommonSubsequence = function(arrays) {
    let isInAllArrays = arrays.length;
    const seen = {};
    let result = [];
    for (let i = 0; i < arrays.length; i++) {
        let index = 0;
        while (arrays[i][index]) {
            if (!seen[arrays[i][index]]) {
                seen[arrays[i][index]] = 1;
            } else seen[arrays[i][index]]++;
            index++;
        }
    }
    for (const [key, value] of Object.entries(seen)) {
        if (value === isInAllArrays) {
            result.push(parseInt(key));
        }
    }
    console.log(result);
};

longestCommonSubsequence([[1,3,4],[1,4,7,9]]);
longestCommonSubsequence([[2,3,6,8],[1,2,3,5,6,7,10],[2,3,4,6,9]]);
longestCommonSubsequence([[1,2,3,4,5],[6,7,8]]);
