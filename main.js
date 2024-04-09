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
    let index = 0;
    let counter = 0;
    //console.log(`Before selling tickets: ${tickets}`);
    while (index <= tickets.length - 1) {
        // if value at index k = 0, then break loop
        if (tickets[k] === 0) {
            break;
        }
        // if value at index > 0, decrement value
        // and increment counter
        if (tickets[index] > 0) {
            tickets[index]--;
            counter++;
        } 

        //console.log(`After 1 ticket sold: ${tickets}`)
        //console.log(`Counter: ${counter}`);
        // if end of list is reached, start from the beginning
        if (index === tickets.length - 1) {
            //console.log('reset!')
            index = 0;
            continue;
        }
        index++;
    }
    console.log(counter);
    return counter;
};

timeRequiredToBuy([2,3,2],2);
timeRequiredToBuy([5,1,1,1],0);
