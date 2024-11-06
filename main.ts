function canSortArray(nums: number[]): boolean {
    let bitCount = (bString: string) => {
        let count = 0;
        for (let i = 0; i < bString.length; i++) {
            if (bString.charAt(i) === '1') count++;
        }
        return count;
    }

    let numOfSetBits = bitCount(nums[0].toString(2));
    let maxOfSegment = nums[0];
    let minOfSegment = nums[0];
    let maxOfPrevSegment = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i < nums.length; i++) {
        if (bitCount(nums[i].toString(2)) === numOfSetBits) {
            maxOfSegment = Math.max(maxOfSegment, nums[i]);
            minOfSegment = Math.min(minOfSegment, nums[i]);
        } else {
            if (minOfSegment < maxOfPrevSegment) return false;

            maxOfPrevSegment = maxOfSegment;
            maxOfSegment = nums[i];
            minOfSegment = nums[i];
            numOfSetBits = bitCount(nums[i].toString(2));
        }
    }

    if (minOfSegment < maxOfPrevSegment) return false;

    return true;
};

canSortArray([8,4,2,30,15]);
canSortArray([1,2,3,4,5]);
canSortArray([3,16,8,4,2]);
