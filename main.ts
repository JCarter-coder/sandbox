function checkIfExist(arr: number[]): boolean {
    const aDouble = new Set();
    let ans: boolean = false;
    for (let i = 0; i < arr.length; i++) {
        if (
            aDouble.has(arr[i] * 2) ||
            (arr[i] % 2 === 0 && aDouble.has(arr[i] / 2))
        ) {
            ans = true;
            console.log(ans);
            return ans;
        } else aDouble.add(arr[i]);
    }

    console.log(ans);
    return ans;
};

checkIfExist([10,2,5,3]);
checkIfExist([3,1,7,11]);
