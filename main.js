var removeNthFromEnd = function(head, n) {
    let currentNode = head;
    let listLength = 0;

    while (currentNode != null) {
        listLength++;
        currentNode = currentNode.next;
    }

    if (listLength === n) {
        return head.next;
    }

    // find node to remove
    let nodeBeforeRemovedIndex = listLength - n - 1;
    currentNode = head;

    for (let i = 0; i < nodeBeforeRemovedIndex; i++) {
        currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next
    return head;
};

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
            current.next = newNode
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



let chain = new LinkedList();
chain.turnArrayToList([1,2,3,4,5]);

removeNthFromEnd(chain, 2);
//gameResult([2,5,4,7,20,5]);
//gameResult([4,5,2,1]);
