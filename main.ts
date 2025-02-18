function smallestNumber(pattern: string): string {
    const numStack: number[] = new Array();
    let result: string = "";

    for (let i = 0; i <= pattern.length; i++) {
        numStack.push(i + 1);

        if (i === pattern.length || pattern.charAt(i) === 'I') {
            while (numStack.length !== 0) {
                result += numStack.pop();
            }
        }
    }

    console.log(result);
    return result;
};

smallestNumber("IIIDIDDD");
smallestNumber("DDD");
