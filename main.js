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

var verifyPreorder = function(preorder) {
    let minLimit = Number.MIN_VALUE;
    let i = 0;

    for (num of preorder) {
        while (i > 0 && preorder[i - 1] < num) {
            minLimit = preorder[i - 1];
            i--;
        }
        if (num <= minLimit) {
            console.log('false');
            return false;
        }

        preorder[i] = num;
        i++;
    }

    console.log('true');
    return true;
};

verifyPreorder([5,2,1,3,6]);
verifyPreorder([5,2,6,1,3]);