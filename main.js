class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

deleteNode([4,5,1,9],5);
deleteNode([4,5,1,9],1);
