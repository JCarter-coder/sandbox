function canChange(start: string, target: string): boolean {
    const N = start.length;
    let result: boolean = false;
    let startIndex: number = 0;
    let targetIndex: number = 0;

    while (startIndex < N || targetIndex < N) {
        // Skip underscores
        while (startIndex < N && start.charAt(startIndex) === '_') {
            startIndex++;
        }
        // Skip underscores in target
        while ( targetIndex < N && target.charAt(targetIndex) === '_') {
            targetIndex++;
        }
        // If one exhausted, both should be exhausted
        if (startIndex === N || targetIndex === N) {
            console.log(startIndex === N && targetIndex === N);
            return startIndex === N && targetIndex === N;
        }
        // Check if pieces match and follow movement rules
        if (
            start.charAt(startIndex) !== target.charAt(targetIndex) ||
            (start.charAt(startIndex) === 'L' && startIndex < targetIndex) ||
            (start.charAt(startIndex) === 'R' && startIndex > targetIndex)
        ) {
            console.log(result);
            return result;
        }

        startIndex++;
        targetIndex++;
    }

    result = true;
    console.log(result)
    return result;
};

canChange("_L__R__R_","L______RR");
canChange("R_L_","__LR");
canChange("_R","R_");
