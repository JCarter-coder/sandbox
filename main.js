"use strict";
function intToRoman(num) {
    const numerals = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };
    // Build queue
    const queue = new Array;
    while (num > 0) {
        let remainder = num % 10;
        queue.push(remainder);
        num = Math.floor(num / 10);
    }
    console.log(queue);
    let answer = "";
    while (queue.length !== 0) {
        let index = queue.length - 1;
        let translate = queue.pop();
        //console.log(translate);
        // if not undefined...
        if (translate !== undefined) {
            //console.log(`Translate: numerals[${translate} * 10**${index}]`);
            //console.log(numerals[translate * 10**index]);
            if (numerals[translate * 10 ** index]) {
                answer += numerals[translate * 10 ** index];
            }
            else {
                while (translate > 0) {
                    if (translate >= 5) {
                        answer += numerals[5 * 10 ** index];
                        // -5, going to decrement again at end of loop
                        translate -= 4;
                    }
                    else
                        answer += numerals[10 ** index];
                    translate--;
                }
                //console.log(answer);
            }
        }
    }
    console.log(answer);
    return answer;
}
;
intToRoman(3749);
intToRoman(58);
intToRoman(1994);
