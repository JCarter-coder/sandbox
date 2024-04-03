/* class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = (next===undefined ? null : next);
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(val, next) {
        let newNode = new ListNode(val, next);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    
    turnArrayToList(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.add(arr[i]);
        }
        //console.log(`Head: ${this.head}, Size: ${this.size}`);
    }
}

let chain1 = new LinkedList();
chain1.turnArrayToList([1,2,2,1]);
let chain2 = new LinkedList();
chain2.turnArrayToList([1,2]);
 */


var exist = function(board, word) {
    this.BOARD = board;
    this.ROWS = board.length;
    this.COLUMNS = board[0].length;

    var backtrack = function(row, col, word, index) {
        // Step 1, check the bottom case
        if (index >= word.length) {
            return true;
        }
        // Step 2, check the boundaries
        if (row < 0 || row === this.ROWS || col < 0 || col === this.COLUMNS
            || this.BOARD[row][col] !== word.charAt(index)) {
            return false;
        }
        // Step 3, explore the neighbors in DFS
        let ret = false;
        // mark the path before the next exploration
        this.BOARD[row][col] = '#';
    
        let offsets = [[0,1],[1,0],[0,-1],[-1,0]];
        for (let direction = 0; direction < 4; ++direction) {
            ret = backtrack(row + offsets[direction][0], 
                col + offsets[direction][1], word, index + 1);
            if (ret) {
                return true;
            };
        }
        // Step 4, clean up and return the result
        this.BOARD[row][col] = word.charAt(index);
        return false;
    };

    for (let row = 0; row < this.ROWS; ++row) {
        for (let col = 0; col < this.COLUMNS; ++col) {
            if (backtrack(row, col, word, 0)) {
                console.log('true');
                return true;
            }
        }
    }
    console.log('false');
    return false;
};



exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED");
exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE");
exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB");
