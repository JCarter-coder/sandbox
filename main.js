var removeStones = function(stones) {
    const rows = new Map();
    const cols = new Map();

    for (const [r, c] of stones) {
        if (!rows.has(r)) rows.set(r, new Set());
        if (!cols.has(c)) cols.set(c, new Set());
        rows.get(r).add(c);
        cols.get(c).add(r);
    }

    const visited = new Set();

    const visit = (i, j) => {
        const key = `${i}-${j}`;
        if (visited.has(key)) return;
        visited.add(key);

        const adjRow = rows.get(i);
        for (const col of adjRow) {
            visit(i, col);
        }

        const adjCol = cols.get(j);
        for (const row of adjCol) {
            visit(row, j);
        }
    }

    let remainingStones = 0;

    for (const [r, c] of stones) {
        const key = `${r}-${c}`;
        if (visited.has(key)) continue;
        visit(r, c);
        remainingStones++;
    }

    console.log(stones.length - remainingStones);
};

removeStones([[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]);
removeStones([[0,0],[0,2],[1,1],[2,0],[2,2]]);
removeStones([[0,0]]);
