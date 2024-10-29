/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
    if (costs.length === 0) return 0;
    let k = costs[0].length;
    let n = costs.length;

    for (let house = 1; house < n; house++) {
        let minColor = -1;
        let secondMinColor = -1;
        for (let color = 0; color < k; color++) {
            let cost = costs[house - 1][color];
            if (minColor === -1 || cost < costs[house - 1][minColor]) {
                secondMinColor = minColor;
                minColor = color;
            } else if (
                secondMinColor === -1 ||
                cost < costs[house - 1][secondMinColor]
            ) secondMinColor = color;
        }

        for (let color = 0; color < k; color++) {
            if (color === minColor) {
                costs[house][color] += costs[house - 1][secondMinColor];
            } else {
                costs[house][color] += costs[house - 1][minColor];
            }
        }
    }

    let min = Number.MAX_SAFE_INTEGER;
    for (let c of costs[n - 1]) {
        min = Math.min(min, c);
    }

    console.log(min);
};

minCostII([[1,5,3],[2,9,4]]);
minCostII([[1,3],[2,4]]);
