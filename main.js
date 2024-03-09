/* class ListNode {
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
} */

var mergeAlternately = function(word1, word2) {
    let mergedString = "";
    let longestWord = (word1.length >= word2.length ?
        word1.length : word2.length);
    for (let i = 0; i < longestWord; i++) {
        if (word1[i]) {
            mergedString += word1[i];
        } else if (word2.slice(i)) {
            mergedString += word2.slice(i);
            break;
        }
        if (word2[i]) {
            mergedString += word2[i];
        } else if (word1.slice(i + 1)) {
            mergedString += word1.slice(i + 1);
            break;
        }
    }
    console.log(mergedString);
};

mergeAlternately("abc","pqr");
mergeAlternately("ab","pqrs");
mergeAlternately("abcd","pq");




//let chain = new LinkedList();
//chain.turnArrayToList([1,1,2,1,2,3]);

//frequenciesOfElements(chain.head);
