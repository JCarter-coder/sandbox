var gameResult = function(head) {
    console.log(head);
    let even = head;
    let odd = even.next;
    let evenTeam = 0;
    let oddTeam = 0;

    while (even != null & odd != null) {
        console.log(`Even: ${even}`);
        console.log(`Odd: ${odd}`);
        if (even.val > odd.val) {
            evenTeam++;
        } else if (odd.val > even.val) {
            oddTeam++;
        }
        if (odd.next != null) {
            even = odd.next;
            odd = even.next;
        } else break;
        
    }
    // return "Odd"
    if (oddTeam > evenTeam) {
        return "Odd";
    } else if (evenTeam > oddTeam) {
        return "Even";
    } else return "Tie";

    // return "Even"

    // return "Tie"
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
        console.log(`Head: ${this.head}, Size: ${this.size}`);
    }
}



let chain = new LinkedList();
chain.turnArrayToList([2,1]);

gameResult(chain);
//gameResult([2,5,4,7,20,5]);
//gameResult([4,5,2,1]);

/* var removeNthFromEnd = function(head, n) {
    // find length list
    let listLength = 0;
    let currentNode = head;

    while (currentNode != null) {
        currentNode = currentNode.next;
        listLength++;
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
    console.log(head);
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }   
}

function createLinkedListFromArray(arr) {
    let head = null;
    let tail = null

    arr.forEach((value) => {
        let newNode = new ListNode(value);
        if (!head) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    })
    
    return head;
}

let listToEval = createLinkedListFromArray([1,2,3,4,5]);
//let listToEval = createLinkedListFromArray([1]);
//let listToEval = createLinkedListFromArray([1,2]);

removeNthFromEnd(listToEval,2);
//removeNthFromEnd(listToEval,1);
//removeNthFromEnd(listToEval,1); */