var sortJumbled = function(mapping, nums) {
    const mapNumber = (num) => {
        if (num === 0) return mapping[0];

        let result = 0;
        let curMult = 1;
        while (num > 0) {
            const digit = num % 10;
            num = Math.floor(num / 10);
            result += mapping[digit] * curMult;
            curMult *= 10;
        }
        return result;
    };

    const mappedNum = {};
    for (let num of nums) {
        if (!(num in mappedNum)) {
            mappedNum[num] = mapNumber(num);
        }
    }

    nums.sort((a, b) => mappedNum[a] - mappedNum[b]);

    console.log(nums);
};

sortJumbled([8,9,4,0,2,1,3,5,7,6],[991,338,38]);
sortJumbled([0,1,2,3,4,5,6,7,8,9],[789,456,123]);
sortJumbled([0,1,2,3,4,5,6,7,8,9],[999999999,0]);
