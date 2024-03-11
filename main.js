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

var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let tempVowels = [];
    let result = s.split('');
    console.log(result);
    for (let i = 0; i < result.length; i++) {
        // if string includes a vowel push
        // the value to the tempVowels array
        if (vowels.includes(result[i])) {
            tempVowels.push(result[i]);
        }
    }
    console.log(tempVowels);
    for (let j = 0; j < result.length; j++) {
        if (vowels.includes(result[j])) {
            // pop the last value of the tempVowels array
            // and assign it to the next evaluated vowel
            result[j] = tempVowels.pop();
        }
    }
    console.log(result.join(''));
};

reverseVowels("hello");
reverseVowels("leetcode");
reverseVowels("aA");
reverseVowels("race car");


//let chain = new LinkedList();
//chain.turnArrayToList([1,1,2,1,2,3]);

//frequenciesOfElements(chain.head);
