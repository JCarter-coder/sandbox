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

var kidsWithCandies = function(candies, extraCandies) {
    let maxValue = Math.max(...candies);
    console.log(maxValue);
    let result = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxValue) {
            result.push(true);
        } else {
            result.push(false)
        };
    }
    console.log(result);
};

kidsWithCandies([2,3,5,1,3], 3);
kidsWithCandies([4,2,1,1,2], 1);
kidsWithCandies([12,1,12], 10);


//let chain = new LinkedList();
//chain.turnArrayToList([1,1,2,1,2,3]);

//frequenciesOfElements(chain.head);
