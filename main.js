class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(val) {
        let newNode = new ListNode(val);
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

var removeZeroSumSublists = function(head) {
    let front = new ListNode(0, head);
    let start = front;
    
    while (start !== null) {
        let prefixSum = 0;
        let end = start.next;

        while (end !== null) {
            prefixSum += end.val;
            if (prefixSum === 0) {
                start.next = end.next;
            }
            end = end.next;
        }
        start = start.next;
    }
    console.log(front.next)
    return front.next;
};

// May be issues with how I'm creating lists compared to 
// what LeetCode is using. Solution works on LeetCode but
// there is something different in this environment
let chain = new LinkedList();
chain.turnArrayToList([1,2,-3,3,1]);
//chain.removeZeroSumSublists([1,2,3,-3,4]);
//chain.removeZeroSumSublists([1,2,3,-3,-2]);

removeZeroSumSublists(chain);