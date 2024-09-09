/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    const DIRECTIONS = [[0,1],[1,0],[0,-1],[-1,0]];
    const result = [];
    for (let row = 0; row < m; row++) {
        result.push(new Array(n).fill(-1));
    }

    let i = 0;
    let j = 0;
    let currentDirection = 0;

    while (head != null) {
        result[i][j] = head.val;
        let newi = i + DIRECTIONS[currentDirection][0];
        let newj = j + DIRECTIONS[currentDirection][1];

        if (
            Math.min(newi, newj) < 0 ||
            newi >= m ||
            newj >= n ||
            result[newi][newj] != -1
        ) currentDirection = (currentDirection + 1) % 4;
        i += DIRECTIONS[currentDirection][0];
        j += DIRECTIONS[currentDirection][1];

        head = head.next;
    }
    
    console.log(result);
};

spiralMatrix(3,5,[3,0,2,6,8,1,7,9,4,2,5,5,0]);
spiralMatrix(1,4,[0,1,2]);
