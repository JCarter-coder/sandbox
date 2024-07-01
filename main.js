var threeConsecutiveOdds = function(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) count++;
        else count = 0;
        if (count === 3) {
            console.log("true");
            return true;
        }
    }

    console.log("false");
    return false;
};

threeConsecutiveOdds([2,6,4,1]);
threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]);