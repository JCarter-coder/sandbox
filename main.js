/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    let gcd = (a, b) => {
        if (b === 0) return a;
        else return gcd(b, a % b);
    }

    if (head.next === null) return head;

    let node1 = head;
    let node2 = head.next;

    while (node2 !== null) {
        let gcdValue = gcd(node1.val, node2.val);
        let gcdNode = new ListNode(gcdValue);

        node1.next = gcdNode;
        gcdNode.next = node2;

        node1 = node2;
        node2 = node2.next;
    }

    console.log(head);
};

insertGreatestCommonDivisors([18,6,10,3]);
insertGreatestCommonDivisors([7]);
