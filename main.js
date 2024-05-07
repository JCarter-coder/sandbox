class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

class LinkedList {
    constructor(array) {
        this.head = null;

        let currentNode;
        for (let i = 0; i < array.length; i++) {
            
            if (this.head === null) {
                this.head = new ListNode(array[i]);
                currentNode = this.head;
            } else {
                currentNode.next = new ListNode(array[i]);
                currentNode = currentNode.next;
            }
        }
    }
}

var doubleIt = function(head) {
    let current = head;
    let stack = [];

    while (current !== null) {
        stack.push(current);
        current = current.next;
    }
    
    let nxt = null;
    let carry = 0;

    while (stack.length > 0) {
        current = stack.pop();
        current.next = nxt;
        nxt = current;
        carry += current.val * 2;
        current.val = carry % 10;
        carry = Math.floor(carry / 10);
    }

    if (carry > 0) {
        current = new ListNode(carry);
        current.next = nxt;
    }

    console.log(current);
    return current;
};

let list1 = new LinkedList([1,8,9])
doubleIt(list1.head);
let list2 = new LinkedList([9,9,9])
doubleIt(list2.head);