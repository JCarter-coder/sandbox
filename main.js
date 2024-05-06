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

var removeNodes = function(head) {
    let current = head;
    let stack = [];

    while (current !== null) {
        while (stack.length > 0 && stack[stack.length - 1].val < current.val) {
            stack.pop();
        }
        stack.push(current);
        current = current.next;
    }

    let nextVal = null;
    while (stack.length > 0) {
        current = stack.pop();
        current.next = nextVal;
        nextVal = current;
    }

    console.log(current);
    return current;
};

let list1 = new LinkedList([5,2,13,3,8])
removeNodes(list1.head);
let list2 = new LinkedList([1,1,1,1])
removeNodes(list2.head);