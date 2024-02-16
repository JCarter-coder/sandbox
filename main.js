var findLeastNumOfUniqueInts = function(arr, k) {
    let container = {}  
    for (let i = 0; i < arr.length; i++) {
        if (!container[arr[i]]) {
            container[arr[i]] = 1;
        } else {
            container[arr[i]] += 1;
        }
    }
    //console.log(container);
    const sortedArray = Object.entries(container).sort((a,b) => b[1] - a[1]);
    //console.log((sortedArray));
    // remove the last index (or 1 from value) and decrement k
    while (k > 0) {
        //console.log(k);
        if (sortedArray[sortedArray.length-1][1] === 1) {
            sortedArray.splice(-1, 1);
            //console.log(sortedArray);
        } else {
            sortedArray[sortedArray.length-1][1] -= 1;
            //console.log(sortedArray);
        }
        k--;
    }
    console.log(sortedArray.length);
};

findLeastNumOfUniqueInts([5,5,4],1);
findLeastNumOfUniqueInts([4,3,1,1,3,3,2],3);
