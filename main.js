var minimumLength = function(s) {
    let chars = s.split('');
    let prefix = chars[0];
    let suffix = chars[chars.length - 1];
    //console.log(`Before: ${chars}`)
    if (chars.length === 1) {
        console.log(1);
        return 0;
    }
    while (prefix === suffix && chars.length > 1) {
        while (chars[0] === prefix) {
            chars.splice(0, 1);
        }
        while (chars[chars.length - 1] === suffix) {
            chars.splice(chars.length - 1, 1);
        }

        prefix = chars[0];
        suffix = chars[chars.length - 1];
        //console.log(`After: ${chars}`)
    } 
    
    console.log(chars.length);
};

minimumLength("");
minimumLength("a")
minimumLength("ca");
minimumLength("cabaabacc");
minimumLength("bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb");

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