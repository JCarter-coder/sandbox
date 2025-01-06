function minOperations(boxes) {
    const N = boxes.length;
    const result = new Array(N);
    let ballCount = 0;
    let move = 0;
    for (let i = 0; i < N; i++) {
        result[i] = move;
        Number(boxes.charAt(i)) === 1 ? ballCount++ : ballCount;
        move += ballCount;
    }
    console.log(result);
    ballCount = 0;
    move = 0;
    for (let i = N - 1; i >= 0; i--) {
        result[i] += move;
        Number(boxes.charAt(i)) === 1 ? ballCount++ : ballCount;
        move += ballCount;
    }
    console.log(result);
    return result;
}
;
minOperations("110");
minOperations("001011");
export {};
