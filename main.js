var bagOfTokensScore = function(tokens, power) {
    let score = 0;
    tokens.sort((a,b) => a - b);
    let leftPointer = 0;
    let rightPointer = tokens.length - 1;
    while (leftPointer <= rightPointer) {
        // place face up
        if (power >= tokens[leftPointer]) {
            score++;
            power -= tokens[leftPointer];
            leftPointer++;
        } else if (score > 0 && leftPointer < rightPointer) {
            score--;
            power += tokens[rightPointer]
            rightPointer--;
        } else {
            console.log(score);
            return 0;
        }
        /* while (tokens[leftPointer] < power && leftPointer < rightPointer) {
            score += 1;
            power -= tokens[leftPointer];
            leftPointer++;
            console.log(score);
        }
        if (tokens[leftPointer] > (power + tokens[rightPointer])) {
            break;
        } 
        // place face down
        if (score >= 1 && leftPointer < rightPointer) {
            score -= 1;
            power += tokens[rightPointer];
            rightPointer--;
            console.log(score);
        };*/
    }
    
    //console.log(tokens);
    console.log(score);
};

bagOfTokensScore([100], 50);
bagOfTokensScore([200,100], 150);
bagOfTokensScore([100,200,300,400], 200);

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