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

var intersection = function(nums1, nums2) {
    let container = {};
    let longestArray;
    let shortestArray;
    let result = [];
    //let largestArray = (nums1.length >= nums2.length ? nums1 : nums2);
    if (nums1.length > nums2.length) {
        longestArray = nums1;
        shortestArray = nums2;
    } else {
        longestArray = nums2;
        shortestArray = nums1;
    }
    for (let i = 0; i < longestArray.length; i++) {
        if (!container[longestArray[i]]) {
            container[longestArray[i]] = 1;
        }
    }
    for (let j = 0; j < shortestArray.length; j++) {
        if (container[shortestArray[j]] > 0) {
            result.push(shortestArray[j]);
            container[shortestArray[j]] = 0;
        }
    }
    console.log(result);
};

intersection([1,2,2,1],[2,2]);
intersection([4,9,5],[9,4,9,8,4]);


//let chain = new LinkedList();
//chain.turnArrayToList([1,1,2,1,2,3]);

//frequenciesOfElements(chain.head);
