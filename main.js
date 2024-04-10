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
    deck.sort((a,b) => b - a);
    let orderedDeck = [];
    //console.log(deck);
    for (let i = 0; i < deck.length; i++) {
        if (i === 0) {
            orderedDeck.push(deck[i]);
        } else if (i === 1) {
            orderedDeck.splice(0, 0, deck[i]);
        } else {
            let temp = orderedDeck.pop();
            orderedDeck.splice(0, 0, deck[i]);
            orderedDeck.splice(1, 0, temp);
        }
        //console.log(orderedDeck);
    }
    console.log(orderedDeck);
};

deckRevealedIncreasing([17,13,11,2,3,5,7]);
deckRevealedIncreasing([1,1000]);
