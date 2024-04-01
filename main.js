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

var lengthOfLongestSubstringTwoDistinct = function(s) {
    const seen = {};
    let longestSubString = 0;
    let leftPointer = 0;
    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        if (!seen[s[rightPointer]]) {
            seen[s[rightPointer]] = 1;
        } else seen[s[rightPointer]]++;

        while (Object.keys(seen).length > 2) {
            seen[s[leftPointer]]--;
            if (seen[s[leftPointer]] === 0) {
                delete seen[s[leftPointer]];
            }
            leftPointer++;
        }
        
        longestSubString = Math.max(longestSubString, rightPointer - leftPointer + 1);
    }
    console.log(longestSubString);
    return longestSubString;
};

lengthOfLongestSubstringTwoDistinct("eceba");
lengthOfLongestSubstringTwoDistinct("ccaabbb");