/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let currA = 0;
    let currB = 0;
    let currC = 0;
    let totalIterations = a + b + c;
    let ans = "";

    for (let i = 0; i < totalIterations; i++) {
        if (
            (a >= b && a >= c && currA !== 2) ||
            (a > 0 && (currB === 2 || currC === 2))
        ) {
            ans += 'a';
            a--;
            currA++;
            currB = 0;
            currC = 0;
        } else if (
            (b >= a && b >= c && currB !== 2) ||
            (b > 0 && (currC === 2 || currA === 2))
        ) {
            ans += 'b';
            b--;
            currB++;
            currA = 0;
            currC = 0;
        } else if (
            (c >= a && c >= b && currC !== 2) ||
            (c > 0 && (currA === 2 || currB === 2))
        ) {
            ans += 'c';
            c--;
            currC++;
            currA = 0;
            currB = 0;
        }
    }
    console.log(ans);
};

longestDiverseString(1,1,7);
longestDiverseString(7,1,0);
