/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    const answer = new Array(k).fill(null);
    let size = 0;
    let current = head;
    while (current) {
        size++;
        current = current.next;
    }

    let splitSize = Math.floor(size / k);
    let remainder = size % k;

    current = head;
    let prev = null;
    for (let i = 0; i < k; i++) {
        // Create i-th part
        answer[i] = current;
        let currentSize = splitSize + (remainder > 0 ? 1 : 0);
        remainder--;

        for (let j = 0; j < currentSize; j++) {
            prev = current;
            current = current.next;
        }

        if (prev) prev.next = null;
    }

    console.log(answer);
};

splitListToParts([1,2,3],5);
splitListToParts([1,2,3,4,5,6,7,8,9,10],3);
