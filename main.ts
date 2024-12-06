//Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

class LinkedList {
    head: ListNode;
    constructor(array: number[]) {
        this.head = new ListNode(array[0])
        let currentNode = this.head;
        for (let i = 1; i < array.length; i++) {
            currentNode.next = new ListNode(array[i]);
            currentNode = currentNode.next;
        }
    }
}


function middleNode(head: ListNode | null): ListNode | null {
    let steps: number = 0;
    let currentNode = head;
    while (currentNode !== null) {
        steps++;
        currentNode = currentNode.next;
    }

    let nodeNumber: number = (
        steps % 2 === 0 ? steps / 2 + 1 : Math.ceil(steps/2)
    );

    currentNode = head;
    while (--nodeNumber > 0 && currentNode !== null) {
        currentNode = currentNode.next;
    }

    console.log(currentNode);
    return currentNode;
};

let list1 = new LinkedList([1,2,3,4,5]);
let list2 = new LinkedList([1,2,3,4,5,6]);
middleNode(list1.head);
middleNode(list2.head);
