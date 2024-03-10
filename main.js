/* class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(val) {
        let newNode = new ListNode(val);
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
} */

var gcdOfStrings = function(str1, str2) {
    let num1;
    let num2;
    let longerString = (str1.length >= str2.length ?
        str1 : str2);
    let shorterString = (str1.length < str2.length ?
        str1 : str2);    
    let result = "";

    // check if there is a non-zero GCD string
    if (str1 + str2 !== str2 + str1) {
        console.log(result);
        return result;
    }

    num1 = longerString.length;
    num2 = shorterString.length;

    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    gcdStringLength = num1;

    // return "" if initial indices don't match
    // over the length of the gcdStringLength
    for (let i = 0; i < gcdStringLength; i++) {
        if (longerString[i] === shorterString[i]) {
            result += longerString[i];
        } else {
            result = "";
            console.log(result);
            return result;
        }
    }

    console.log(result);
    return result;
};

gcdOfStrings("ABCABC","ABC");
gcdOfStrings("ABABAB","ABAB");
gcdOfStrings("LEET","CODE");
gcdOfStrings("ABCDEF","ABC");
gcdOfStrings("ABA","AB");
gcdOfStrings("AA","A");




//let chain = new LinkedList();
//chain.turnArrayToList([1,1,2,1,2,3]);

//frequenciesOfElements(chain.head);
