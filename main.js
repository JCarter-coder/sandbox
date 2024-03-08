var maxFrequencyElements = function(nums) {
    let container = {};
    let totalFreq = 0;
    let highestKeyFreq = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!container[nums[i]]) {
            container[nums[i]] = 1;
        } else container[nums[i]]++;
    }
    for (key in container) {
        //console.log(`${key}: ${container[key]}`)
        if (container[key] === highestKeyFreq) {
            // add to the total since values tie
            totalFreq += container[key];
        } else if (container[key] > highestKeyFreq) {
            highestKeyFreq = container[key];
            // reset the total to a new high frequency value
            totalFreq = container[key];
        } else continue;
    }
    console.log(totalFreq);
};

maxFrequencyElements([1,2,2,3,1,4]);
maxFrequencyElements([1,2,3,4,5]);

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
}

let chain = new LinkedList();
chain.turnArrayToList([1,2,3,4,5]);

middleNode(chain.head); */