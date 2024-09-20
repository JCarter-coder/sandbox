/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function(regions, region1, region2) {
    const graph = new Map();

    for (const [mainRegion, ...subRegions] of regions) {
        graph.set(mainRegion, subRegions);
    }

    const dfs = (region) => {
        if (result) return;

        if (!graph.has(region)) {
            return region === region1 || region === region2 ? 1 : 0;
        }

        let foundCount = 0;

        for (const subRegions of graph.get(region)) {
            foundCount += dfs(subRegions);
        }

        if (region === region1 || region === region2) foundCount++;

        if (foundCount === 2) {
            result = region;
            return 0;
        }

        return foundCount;
    }

    let result = "";

    dfs(regions[0][0]);

    console.log(result);
};

findSmallestRegion(
    [["Earth","North America","South America"],["North America","United States","Canada"],["United States","New York","Boston"],["Canada","Ontario","Quebec"],["South America","Brazil"]],
    "Quebec",
    "New York"
);
findSmallestRegion(
    [["Earth", "North America", "South America"],["North America", "United States", "Canada"],["United States", "New York", "Boston"],["Canada", "Ontario", "Quebec"],["South America", "Brazil"]],
    "Canada",
    "South America"
);
