function twoSum(numbers: number[], target: number): number[] {
    let leftPtr: number = 0;
    let rightPtr: number = numbers.length - 1;

    while (leftPtr < rightPtr) {
        let evaluate: number = numbers[leftPtr] + numbers[rightPtr];

        if (evaluate === target) break;
        else if (evaluate < target) leftPtr++;
        else rightPtr--;
    }

    // adjust for 1-index reference
    console.log([leftPtr + 1, rightPtr + 1]);
    return [leftPtr + 1, rightPtr + 1];
};

twoSum([2,7,11,15],9);
twoSum([2,3,4],6);
twoSum([-1,0],-1);
