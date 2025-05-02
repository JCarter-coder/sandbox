"use strict";
function pushDominoes(dominoes) {
    const charArray = dominoes.split("");
    const N = charArray.length;
    const forces = new Array(N).fill(0);
    let force = 0;
    // Left to right
    for (let i = 0; i < N; i++) {
        if (charArray[i] === "R") {
            force = N;
        }
        else if (charArray[i] === "L") {
            force = 0;
        }
        else {
            force = Math.max(force - 1, 0);
        }
        forces[i] += force;
    }
    force = 0;
    // Right to left
    for (let i = N - 1; i >= 0; i--) {
        if (charArray[i] === "L") {
            force = N;
        }
        else if (charArray[i] === "R") {
            force = 0;
        }
        else {
            force = Math.max(force - 1, 0);
        }
        forces[i] -= force;
    }
    // Build the result string
    let result = "";
    for (let f of forces) {
        if (f > 0) {
            result += "R";
        }
        else if (f < 0) {
            result += "L";
        }
        else {
            result += ".";
        }
    }
    console.log(result);
    return result;
}
;
pushDominoes("RR.L");
pushDominoes(".L.R...LR..L..");
