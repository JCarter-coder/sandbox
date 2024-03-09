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

var getCommon = function(nums1, nums2) {
    let largestArrayLength = (nums1.length >= nums2.length ? nums1.length : nums2.length);
    //console.log(largestArrayLength);
    let hash = {};
    let temp1 = undefined;
    let temp2 = undefined;
    for (let i = 0; i < largestArrayLength; i++) {
        if (nums1[i] && temp1 !== nums1[i]) {
            //temp1 = (temp1 === undefined || temp1 < nums1[i] ? nums1[i] : temp1)
            if (!hash[nums1[i]]) {
                hash[nums1[i]] = 1;
            } else if (hash[nums1[i]]) {
                console.log(nums1[i]);
                return 0;
            }
            temp1 = nums1[i];
        }
        if (nums2[i] && temp2 !== nums2[i]) {
            if (!hash[nums2[i]]) {
                hash[nums2[i]] = 1;
            } else if (hash[nums2[i]]) {
                console.log(nums2[i]);
                return 0;
            }
            temp2 = nums2[i];
        }
        console.log(hash);
    }
    console.log(-1);
};

getCommon([1,2,3],[2,4]);
getCommon([1,2,3,6],[2,3,4,5]);
getCommon([1,1,2],[2,4]);


//let chain = new LinkedList();
//chain.turnArrayToList([1,1,2,1,2,3]);

//frequenciesOfElements(chain.head);
