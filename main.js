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

var maximalRectangle = function(matrix) {
    if (matrix.length === 0) {
        console.log(0);
        return 0;
    }

    let m = matrix.length;
    let n = matrix[0].length;

    let left = new Array(n);
    left.fill(0);

    let right = new Array(n);
    right.fill(n);

    let height = new Array(n);
    height.fill(0);

    let maxArea = 0;
    for (let i = 0; i < m; i++) {
        let cur_left = 0;
        let cur_right = n;

        // update height
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                height[j]++;
            } else height[j] = 0;
        }

        // update left
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                left[j] = Math.max(left[j], cur_left);
            } else {
                left[j] = 0;
                cur_left = j + 1;
            }
        }

        // update right
        for (let j = n - 1; j >= 0; j--) {
            if (matrix[i][j] === '1') {
                right[j] = Math.min(right[j], cur_right);
            } else {
                right[j] = n;
                cur_right = j;
            }
        }

        // update area
        for (let j = 0; j < n; j++) {
            maxArea = Math.max(maxArea, (right[j] - left[j]) * height[j]);
        }
    }
    console.log(maxArea);
    return maxArea;
};

maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]);
maximalRectangle([["0"]]);
maximalRectangle([["1"]]);
