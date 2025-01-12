"use strict";
function canBeValid(s, locked) {
    const N = s.length;
    // odd number of parentheses
    if (N % 2 === 1) {
        console.log(false);
        return false;
    }
    let openBrackets = 0;
    let unlocked = 0;
    for (let i = 0; i < N; i++) {
        if (locked.charAt(i) === '0')
            unlocked++;
        else if (s.charAt(i) === '(')
            openBrackets++;
        else if (s.charAt(i) === ')') {
            if (openBrackets > 0)
                openBrackets--;
            else if (unlocked > 0)
                unlocked--;
            else {
                console.log(false);
                return false;
            }
        }
    }
    let balance = 0;
    for (let i = N - 1; i >= 0; i--) {
        if (locked.charAt(i) === '0') {
            balance--;
            unlocked--;
        }
        else if (s.charAt(i) === '(') {
            balance++;
            openBrackets--;
        }
        else if (s.charAt(i) === ')') {
            balance--;
        }
        if (balance > 0) {
            console.log(false);
            return false;
        }
        if (unlocked === 0 && openBrackets === 0) {
            break;
        }
    }
    if (openBrackets > 0) {
        console.log(false);
        return false;
    }
    console.log(true);
    return true;
}
;
canBeValid("))()))", "010100");
canBeValid("()()", "0000");
canBeValid(")", "0");
