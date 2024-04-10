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

var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b) => a - b);
    let size = deck.length;
    let orderedDeck = new Array(size);
    orderedDeck.fill(0);
    let skip = false;
    let indexInDeck = 0;
    let indexInResult = 0;

    while (indexInDeck < size) {
        if (orderedDeck[indexInResult] === 0) {
            if (!skip) {
                orderedDeck[indexInResult] = deck[indexInDeck];
                indexInDeck++;
            }
            skip = !skip;
        }
        indexInResult = (indexInResult + 1) % size;
    }
    console.log(orderedDeck);
};

deckRevealedIncreasing([17,13,11,2,3,5,7]);
deckRevealedIncreasing([1,1000]);
