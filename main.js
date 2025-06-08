"use strict";
function lexicalOrder(n) {
    let result = [];
    function dfs(current) {
        if (current > n)
            return;
        result.push(current);
        for (let i = 0; i < 10; i++) {
            const next = current * 10 + i;
            if (next <= n) {
                dfs(next);
            }
        }
    }
    for (let i = 1; i <= 9; i++) {
        if (i <= n) {
            dfs(i);
        }
    }
    console.log(result);
    return result;
}
;
lexicalOrder(13);
lexicalOrder(2);
