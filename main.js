/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        let currrentChar = s.charAt(i);
        if (stack.length === 0) {
            stack.push(currrentChar);
            continue;
        }
        if (currrentChar === 'B' && stack[stack.length - 1] === 'A') {
            stack.pop();
        }
        else if (currrentChar === 'D' && stack[stack.length - 1] === 'C') {
            stack.pop();
        }
        else stack.push(currrentChar);
    }

    console.log(stack.length);
};

minLength("ABFCACDB");
minLength("ACBBD");
