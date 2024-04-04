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


var maxDepth = function(s) {
    let depth = 0;
    let parenthesis = 0;

    if (s === "") {
        console.log(depth);
        return depth;
    }
    if (s.length === 1 && (s !== "(" || s !== ")")) {
        console.log(depth);
        return depth;
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            parenthesis++;
        } else if (s[i] === ")") {
            parenthesis--;
        }
        depth = Math.max(depth, parenthesis);
    }
    console.log(depth);
    return depth;
};

maxDepth("(1+(2*3)+((8)/4))+1");
maxDepth("(1)+((2))+(((3)))");
maxDepth("");
maxDepth("C");