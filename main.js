"use strict";
function numRabbits(answers) {
    const count = new Array(1000).fill(0);
    let total = 0;
    for (const answer of answers) {
        count[answer]++;
    }
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            total += Math.ceil(count[i] / (i + 1)) * (i + 1);
        }
    }
    console.log(total);
    return total;
}
;
numRabbits([1, 1, 2]);
numRabbits([10, 10, 10]);
