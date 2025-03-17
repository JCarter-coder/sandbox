function divideArray(nums: number[]): boolean {
    const hashMap = new Map();
    for (let num of nums) {
        hashMap.set(num, (hashMap.get(num) || 0) + 1);
    }

    const iterator = hashMap[Symbol.iterator]();

    let result: boolean = true;
    for (const [ num, count ] of iterator) {
        if (count % 2 !== 0) {
            result = false;
            break;
        }
    }

    console.log(hashMap);
    console.log(result);
    return result;
};

divideArray([3,2,3,2,2,2]);
divideArray([1,2,3,4]);
