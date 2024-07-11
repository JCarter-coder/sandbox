var reverseParentheses = function(s) {
    var reverse = function(sub) {
        for (let i = 0; i < (sub.length / 2); i++) {
            let temp = sub[i];
            sub[i] = sub[sub.length - 1 - i];
            sub[sub.length - 1 - i] = temp;
        }
        return sub;
    }
    s = s.split('');
    
    let left = 0;
    let right = 1;

    while (left < right && right < s.length) {
        if (s[right] === '(') {
            left = right;
        } else if (s[right] === ')') {
            let subString = reverse(s.slice(left+1, right));
            for (let i = 0; i < subString.length; i++) {
                s.splice(left + i, 1, subString[i]);
            }
            s.splice(right - 1, 2);
            left = 0;
            right = 1;
            continue;
        }
        right++;
    }

    console.log(s.join(''));
};

reverseParentheses("(abcd)");
reverseParentheses("(u(love)i)");
reverseParentheses("(ed(et(oc))el)");
