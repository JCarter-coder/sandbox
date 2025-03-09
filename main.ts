function numberOfAlternatingGroups(colors: number[], k: number): number {
    const circle: number[] = new Array(...colors, ...colors);
    let left: number = 0;
    let prevColor: number = colors[0];
    let result: number = 0;
    for (let right = 1; right < colors.length - 1 + k; right++) {
        // if color repeats, reset window
        if (circle[right] === prevColor) {
            left = right;
        } else {
            if (right - left + 1 === k) {
                result++;
                console.log(`${right} - ${left} + 1 = ${k}, result: ${result}`);
                // slide window for next iteration
                left++;
            }
        }
        prevColor = circle[right];
    }
    console.log(circle);
    console.log(`Final Result: ${result}`);
    return result;
};

numberOfAlternatingGroups([0,1,0,1,0],3);
numberOfAlternatingGroups([0,1,0,0,1,0,1],6);
numberOfAlternatingGroups([1,1,0,1],4);
