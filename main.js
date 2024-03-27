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

var numSubarrayAtMost = function(nums, goal) {
    let leftPointer = 0;
    let totalCount = 0;
    let currentSum = 0
    for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
        currentSum += nums[rightPointer]
        
        while (leftPointer <= rightPointer && currentSum > goal) {
            currentSum -= nums[leftPointer++];
        }
        
        totalCount += rightPointer - leftPointer + 1;
    }
    return totalCount;
}

var numSubarraysWithSum = function(nums, goal) {
    console.log(numSubarrayAtMost(nums, goal) - numSubarrayAtMost(nums, goal - 1));
};

numSubarraysWithSum([1,0,1,0,1],2);
numSubarraysWithSum([0,0,0,0,0],0);



/* insert([[1,3],[6,9]],[2,5]);
insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]);
insert([],[5,7]);
insert([[1,5]],[2,7]);
insert([[1,5]],[6,8]);
insert([[0,5],[9,12]],[7,16]); */


/* insert([[3,5],[7,8]],[1,2]); // case 1 correct
insert([[3,5],[7,8]],[1,4]); // case 2 correct
insert([[3,5],[7,8]],[1,6]); // case 3 correct
insert([[3,6],[7,8]],[4,5]); // case 4 correct
insert([[3,5],[7,8]],[4,6]); // case 5 correct
insert([[3,5],[7,8]],[9,10]); // case 6 correct */

