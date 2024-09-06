class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    nums = new Set(nums);

    let dummy = new ListNode(-1, head);
    let probe = dummy;

    console.log(dummy);

    /* while (head !== null && numsToRemove.has(head.val)) {
        head = head.next;
    } */

    /* if (current.next) {
        console.log(null);
        return null;
    } */

    while (probe.next) {
        if (nums.has(probe.next.val)) {
            // Skip the next node by updating the pointer
            probe.next = probe.next.next;
        } else {
            // Move to the next node
            probe = probe.next;
        }
    }

    console.log(dummy.next);
};

modifiedList([1,2,3],[1,2,3,4,5]);
modifiedList([1],[1,2,1,2,1,2]);
modifiedList([5],[1,2,3,4]);
