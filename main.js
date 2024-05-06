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
    let list = new LinkedList(head);
    console.log(list);
};

removeNodes([5,2,13,3,8]);
removeNodes([1,1,1,1]);