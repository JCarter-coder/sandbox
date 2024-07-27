var minimumCost = function(source, target, original, changed, cost) {
    // Initialize result to store min cost
    let totalCost = 0;
    // Initialize 2D array to store min conversion
    // cost between any two characters
    const minCost = [];
    for (let i = 0; i < 26; i++) {
        minCost.push(new Array(26).fill(Number.MAX_SAFE_INTEGER))
    }
    // Fill the initial conversion costs from the 
    // given original, changed, and cost arrays
    for (let i = 0; i < original.length; ++i) {
        let startChar = original[i].charCodeAt(0) - 97;
        let endChar = changed[i].charCodeAt(0) - 97;
        minCost[startChar][endChar] = Math.min(
            minCost[startChar][endChar],
            cost[i]
        );
    }
    // Use Floyd-Warshall algorithm to find the
    // shortest path between any two characters
    for (let k = 0; k < 26; k++) {
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < 26; j++) {
                minCost[i][j] = Math.min(
                    minCost[i][j],
                    minCost[i][k] + minCost[k][j]
                );
            }
        }
    }
    // Calculate the total min cost to transform
    // the source string to the target string
    for (let i = 0; i < source.length; i++) {
        if (source.charCodeAt(i) === target.charCodeAt(i)) {
            continue;
        }
        let sourceChar = source.charCodeAt(i) - 97;
        let targetChar = target.charCodeAt(i) - 97;
        // If the transformation is not possible, return -1
        if (minCost[sourceChar][targetChar] >= Number.MAX_SAFE_INTEGER) {
            console.log(-1);
            return -1;
        }
        totalCost += minCost[sourceChar][targetChar];
    }
    console.log(totalCost);
    return totalCost;
};

minimumCost("abcd",
            "acbe",
            ["a","b","c","c","e","d"],
            ["b","c","b","e","b","e"],
            [2,5,5,1,2,20]
        );
minimumCost("aaaa",
            "bbbb",
            ["a","c"],
            ["c","b"],
            [1,2]
        );
minimumCost("abcd",
            "abce",
            ["a"],
            ["e"],
            [10000]
        );
