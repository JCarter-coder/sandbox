/**
 * The knows API is defined in the parent class Relation.
 * knows(a: number, b: number): boolean {
 *     ...
 * };
 */

var solution = function(knows: any) {
    function isCelebrity(i: number, n: number): boolean {
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            if (knows(i, j) || !knows(j, i)) return false;
        }
        return true;
    }

    return function(n: number): number {
        for (let i = 0; i < n; i++) {
            if (isCelebrity(i, n)) return i;
        }
        return -1;
    };
};