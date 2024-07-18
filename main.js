var countPairs = function(root, distance) {
    let count = 0;
    const MAX_DISTANCE = 10;

    function dfs(node) {
        if (!node) return new Array(MAX_DISTANCE + 1).fill(0);
        if (!node.left && !node.right) {
            const res = new Array(MAX_DISTANCE + 1).fill(0);
            res[1] = 1;
            return res;
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        for (let i = 1; i <= distance; i++) {
            for (let j = 1; j <= distance - i; j++) {
                count += left[i] * right[j];
            }
        }

        const res = new Array(MAX_DISTANCE + 1).fill(0);
        for (let i = 1; i < MAX_DISTANCE; i++) {
            res[i + 1] = left[i] + right[i];
        }

        return res;
    }

    dfs(root);
    return count;
};

countPairs([1,2,3,null,4],3);
countPairs([1,2,3,4,5,6,7],3);
countPairs([7,1,4,6,null,5,3,null,null,null,null,null,2],3);
