"use strict";
function stringShift(s, shift) {
    let result = s;
    for (let i = 0; i < shift.length; i++) {
        let leftString = "";
        let rightString = "";
        let move = shift[i][1];
        if (shift[i][1] > result.length) {
            move = shift[i][1] % result.length;
            console.log(`Move: ${move}`);
        }
        // left shift
        if (shift[i][0] === 0) {
            leftString = result.substring(0, move);
            rightString = result.substring(move);
        }
        // right shift 
        else {
            leftString = result.substring(0, result.length - move);
            rightString = result.substring(result.length - move);
            //console.log(`Left: ${leftString}`);
            //console.log(`Right: ${rightString}`);
        }
        result = rightString + leftString;
        //console.log(result);
    }
    console.log(result);
    return result;
}
;
stringShift("abc", [[0, 1], [1, 2]]);
stringShift("abcdefg", [[1, 1], [1, 1], [0, 2], [1, 3]]);
stringShift("abc", [[0, 4]]);
