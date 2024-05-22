var flat = function (arr, n) {
    let result = [];

    const flattening = (nums, l) => {
        for (const num of nums) {
            if (Array.isArray(num) && l > 0) {
                flattening(num, l - 1);
            } else {
                result.push(num);
            }
        }
    }
    flattening(arr, n);
    console.log(result);
    return result;
};

flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]],0);
flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]],1);
flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]],2);
