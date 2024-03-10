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

var canPlaceFlowers = function(flowerbed, n) {
    let leftPointer = 0;
    let rightPointer = 1;
    while (flowerbed[rightPointer] !== undefined && n > 0) {
        // if plot is full and the next plot is empty
        // increment each pointer 2 to evaluate plots
        if (flowerbed[leftPointer] === 1 && flowerbed[rightPointer] === 0) {
            leftPointer += 2;
            rightPointer += 2;
        }
        // else if the next plot is full increment
        // each pointer 3 to evaluate plots
        else if (flowerbed[rightPointer] === 1) {
            leftPointer += 3;
            rightPointer += 3;
        }
        // otherwise plots are empty, decrement n
        // by 1 and increment each pointer 2
        else {
            n--;
            leftPointer += 2;
            rightPointer += 2;
        }
    }
    // evaluate last element on the left pointer
    if (flowerbed[leftPointer] === 0) {
        n--;
    }
    if (n > 0) {
        console.log("false");
    } else console.log("true");
};

canPlaceFlowers([1,0,0,0,1],1);
canPlaceFlowers([1,0,0,0,1],2);
canPlaceFlowers([1,0,0,0,1,0,0],2);


//let chain = new LinkedList();
//chain.turnArrayToList([1,1,2,1,2,3]);

//frequenciesOfElements(chain.head);
