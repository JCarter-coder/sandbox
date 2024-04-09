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

var timeRequiredToBuy = function(tickets, k) {
    let counter = 0;
    
    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            counter += Math.min(tickets[k], tickets[i]);
        } else {
            counter += Math.min(tickets[k] - 1, tickets[i]);
        }
    }
    console.log(counter);
    return counter;
};

timeRequiredToBuy([2,3,2],2);
timeRequiredToBuy([5,1,1,1],0);
