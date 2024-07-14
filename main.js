var deleteDuplicatesUnsorted = function(head) {
    let map = {};
    let current = head;

    // Traverse and fill map with node occurences
    while (current) {
        if (!map[current.val]) map[current.val] = 1;
        else map[current.val]++;
        current = current.next;
    }

    // Traverse the list and delete where necessary
    let dummyHead = new ListNode(0, head);
    current = dummyHead;
    while (current) {
        // Check for duplicates
        while (current.next && map[current.next.val] > 1) {
            current.next = current.next.next;
        }
        current = current.next;
    }
    
    return dummyHead.next;
};

deleteDuplicatesUnsorted([1,2,3,2]);
deleteDuplicatesUnsorted([2,1,1,2]);
deleteDuplicatesUnsorted([3,2,2,1,3,2,4]);
