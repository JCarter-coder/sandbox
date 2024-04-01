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

var compress = function(chars) {
    let charsLength = chars.length;
    let index = 0;
    let tempChar = chars[index];
    let tempNumber = 1;
    if (chars.length === 1) {
        console.log(chars);
        console.log(chars.length);
        return chars.length
    }
    while (++index < charsLength) {
        if (chars[index] === chars[index - 1]) {
            tempNumber++;
        } else {
            if (tempNumber === 1) {
                chars.push(tempChar);
            } else {
                chars.push(tempChar);
                let i = 0;
                while (i < tempNumber.toString().length) {
                    chars.push(tempNumber.toString()[i++]);
                }
            }
            tempChar = chars[index];
            tempNumber = 1;
        }
        if (index === charsLength - 1) {
            if (tempNumber === 1) {
                chars.push(tempChar);
            } else {
                chars.push(tempChar);
                let i = 0;
                while (i < tempNumber.toString().length) {
                    chars.push(tempNumber.toString()[i++]);
                }
            }
        }
    }
    chars.splice(0, charsLength);
    console.log(chars)
    console.log(chars.length);
    return chars.length;
};

compress(["a","a","b","b","c","c","c"]);
compress(["a"]);
compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]);
