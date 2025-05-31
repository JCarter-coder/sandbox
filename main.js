"use strict";
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function createLinkedList(arr) {
    if (arr.length === 0)
        return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
function deleteNodes(head, m, n) {
    let currentNode = head;
    let lastMNode = head;
    while (currentNode !== null) {
        let mCount = m;
        let nCount = n;
        while (currentNode !== null && mCount !== 0) {
            lastMNode = currentNode;
            currentNode = currentNode.next;
            mCount--;
        }
        while (currentNode !== null && nCount !== 0) {
            currentNode = currentNode.next;
            nCount--;
        }
        if (lastMNode !== null) {
            lastMNode.next = currentNode; // Link the last m node to the current node after skipping n nodes
        }
    }
    console.log(head);
    return head;
}
;
deleteNodes(createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 2, 3);
deleteNodes(createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 1, 3);
