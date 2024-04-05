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

var makeGood = function(s) {
    /* if (s.length < 2) {
        console.log(s);
        return s;
    } */
    let leftPointer = 0;
    let rightPointer = leftPointer + 1;
    let strArray = s.split('');
    while (rightPointer < strArray.length) {
        if (strArray[leftPointer].charCodeAt(0) === strArray[rightPointer].charCodeAt(0) - 32
            || strArray[leftPointer].charCodeAt(0) === strArray[rightPointer].charCodeAt(0) + 32) {
            //console.log(`${strArray[leftPointer]} : ${strArray[rightPointer]}`);
            strArray.splice(leftPointer, 2);
            leftPointer = -1;
            rightPointer = leftPointer + 1;
        }
        leftPointer++;
        rightPointer++;
    }
    console.log(strArray.join(''));
};

makeGood("leEeetcode");
makeGood("abBAcC");
makeGood("s");
