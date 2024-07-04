class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var mergeNodes = function(head) {
    let modify = head.next;
    let nextSum = modify;
    while (nextSum != null) {
        let sum = 0;
        // Find the sum of all nodes until you encounter a 0
        while (nextSum.val != 0) {
            sum += nextSum.val;
            nextSum = nextSum.next;
        }
        // Assign the sum to the current node's value
        modify.val = sum;
        // Move nextSum to the first non-zero value of the next block
        nextSum = nextSum.next;
        // Move modify also to this node
        modify.next = nextSum;
        modify = modify.next;
    }

    console.log(head.next);
};

mergeNodes([0,3,1,0,4,5,2,0]);
mergeNodes([0,1,0,3,0,2,2,0]);
