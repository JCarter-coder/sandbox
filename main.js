class PolyNode {
    constructor(x=0, y=0, next=null) {
        this.coefficient = x;
        this.power = y;
        this.next = next;
    }
}

/** 
 * @param {PolyNode} poly1 
 * @param {PolyNode} poly2 
 * @return {PolyNode}
 */

var addPoly = function(poly1, poly2) {
    const root = new PolyNode(1, Infinity);
    let tail = root;

    while (poly1 != null && poly2 != null) {
        if (poly1.power > poly2.power) {
            tail.next = poly1;
            tail = tail.next;
            poly1 = poly1.next;
        } else if (poly1.power < poly2.power) {
            tail.next = poly2;
            tail = tail.next;
            poly2 = poly2.next;
        } else {
            poly1.coefficient += poly2.coefficient;
            tail.next = poly1;
            tail = (poly1.coefficient == 0) ? tail : tail.next;
            poly1 = poly1.next;
            poly2 = poly2.next;
        }
    }

    tail.next = poly1 ?? poly2;
    console.log(...root.next);
};

addPoly([[1,1]],[[1,0]]);
addPoly([[2,2],[4,1],[3,0]],[[3,2],[-4,1],[-1,0]]);
addPoly([[1,2]],[[-1,2]]);
