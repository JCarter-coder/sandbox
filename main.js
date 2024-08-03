var canBeEqual = function(target, arr) {
    let result = true;
    target.sort((a,b) => a - b);
    arr.sort((a,b) => a - b);
    for (let i = 0; i < target.length; i++) {
        if (target[i] !== arr[i]) {
            result = false;
            break;
        }
    }
    console.log(result);
};

canBeEqual([1,2,3,4],[2,4,1,3]);
canBeEqual([7],[7]);
canBeEqual([3,7,9],[3,7,11]);
