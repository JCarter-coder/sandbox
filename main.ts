function minimizeXor(num1: number, num2: number): number {
    let result = 0;

    const isSet = (
        x: number,
        bit: number
    ): boolean => {
        return (x & (1 << bit)) !== 0;
    }

    const setBit = (
        x: number,
        bit: number
    ): number => {
        return x | (1 << bit);
    }

    let num2Binary = num2.toString(2);

    let targetSetBitsCount: number = 0;
    for (let i = 0; i < num2Binary.length; i++) {
        if (num2Binary[i] === '1') targetSetBitsCount++;
    }

    let setBitsCount = 0;
    let currentBit = 31;

    while (setBitsCount < targetSetBitsCount) {
        if (
            isSet(num1, currentBit) ||
            (targetSetBitsCount - setBitsCount > currentBit)
        ) {
            result = setBit(result, currentBit);
            setBitsCount++;
        }
        currentBit--;
    }

    console.log(result);
    return result;
};

minimizeXor(3,5);
minimizeXor(1,12);
minimizeXor(25,72);
