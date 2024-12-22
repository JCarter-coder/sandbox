import { stringify } from "querystring";

function leftmostBuildingQueries(heights: number[], queries: number[][]): number[] {
    const ans: number[] = new Array;
    const n: number = heights.length;
    const table = Array.from({ length: n }, () => Array(20).fill(0));
    const logValues = Array(n + 1).fill(0);
    logValues[0] = -1;

    for (let i = 1; i <= n; i++) {
        logValues[i] = logValues[i >> 1] + 1;
    }

    for (let i = 0; i < n; i++) {
        table[i][0] = heights[i];
    }

    for (let i = 1; i < 20; i++) {
        for (let j = 0; j + (1 << i) <= n; j++) {
            table[j][i] = Math.max(table[j][i - 1], table[j + (1 << (i - 1))][i - 1]);
        }
    }

    for (let i = 0; i < queries.length; i++) {
        let [l, r] = queries[i];
        if (l > r) {
            [l, r] = [r, l];
        }

        if (l === r) {
            ans.push(l);
            continue;
        }

        if (heights[r] > heights[l]) {
            ans.push(r);
            continue;
        }

        const maxHeight = Math.max(heights[l], heights[r]);
        let left = r + 1, right = n, mid;

        while (left < right) {
            mid = Math.floor((left + right) / 2);
            const k = logValues[mid - r + 1];
            const maxInRange = Math.max(table[r][k], table[mid - (1 << k) + 1][k]);

            if (maxInRange > maxHeight) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        ans.push(left === n ? -1 : left);
    }

    console.log(ans);
    return ans;
};

leftmostBuildingQueries(
    [6,4,8,5,2,7],
    [[0,1],[0,3],[2,4],[3,4],[2,2]]
);
leftmostBuildingQueries(
    [5,3,8,2,6,1,4,6],
    [[0,7],[3,5],[5,2],[3,0],[1,6]]
);
