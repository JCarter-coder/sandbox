function doesValidArrayExist(derived: number[]): boolean {
    let XOR: number = 0;

    for (let element of derived) {
        XOR ^= element;
    }

    console.log(XOR === 0);
    return XOR === 0;
};

doesValidArrayExist([1,1,0]);
doesValidArrayExist([1,1]);
doesValidArrayExist([1,0]);
