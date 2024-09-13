/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const result = [];
    // Convert arr into an in-place prefix XOR array
    for (let i = 1; i < arr.length; i++) {
        arr[i] ^= arr[i - 1];
    }
    // Resolve each query using the prefix XOR array
    for (let q of queries) {
        if (q[0] > 0) result.push(arr[q[0] - 1] ^ arr[q[1]]);
        else result.push(arr[q[1]]);
    }

    console.log(result);
};

xorQueries([1,3,4,8],[[0,1],[1,2],[0,3],[3,3]]);
xorQueries([4,8,2,10],[[2,3],[1,3],[0,0],[0,3]]);
