function isArraySpecial(nums: number[]): boolean {
    if (nums.length === 1) {
        console.log(true);
        return true;
    }

    let parityChanged: boolean = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] % 2 === nums[i - 1] % 2) {
            parityChanged = false;
            break;
        }
    }

    console.log(parityChanged);
    return parityChanged
};

isArraySpecial([1]);
isArraySpecial([2,1,4]);
isArraySpecial([4,3,1,6]);
