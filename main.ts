function numberOfSteps(num: number): number {
    let count: number = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
        } else num--;
        //console.log(num);
        count++;
    }

    console.log(count);
    return count;
};

numberOfSteps(14);
numberOfSteps(8);
numberOfSteps(123);
