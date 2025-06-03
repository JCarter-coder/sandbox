"use strict";
function maxCandies(status, candies, keys, containedBoxes, initialBoxes) {
    const n = status.length;
    const canOpen = Array(n).fill(false);
    const hasBox = Array(n).fill(false);
    const used = Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        canOpen[i] = status[i] === 1;
    }
    const q = [];
    let ans = 0;
    for (const box of initialBoxes) {
        hasBox[box] = true;
        if (canOpen[box]) {
            q.push(box);
            used[box] = true;
            ans += candies[box];
        }
    }
    while (q.length > 0) {
        const bigBox = q.shift();
        for (const key of keys[bigBox]) {
            canOpen[key] = true;
            if (hasBox[key] && !used[key]) {
                q.push(key);
                used[key] = true;
                ans += candies[key];
            }
        }
        for (const box of containedBoxes[bigBox]) {
            hasBox[box] = true;
            if (canOpen[box] && !used[box]) {
                q.push(box);
                used[box] = true;
                ans += candies[box];
            }
        }
    }
    console.log(ans);
    return ans;
}
;
maxCandies([1, 0, 1, 0], [7, 5, 4, 100], [[], [], [1], []], [[1, 2], [3], [], []], [0]);
maxCandies([1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1], [[1, 2, 3, 4, 5], [], [], [], [], []], [[1, 2, 3, 4, 5], [], [], [], [], []], [0]);
