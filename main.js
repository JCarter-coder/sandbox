var kthSmallestPrimeFraction = function(arr, k) {
    let sortedArray = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let arrI = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let arrJ = arr[j];
            sortedArray.push([arrI, arrJ]);
        }
    }
    sortedArray.sort((a,b) => a[0]/a[1] - b[0]/b[1]);
    console.log(sortedArray[k - 1]);
};

kthSmallestPrimeFraction([1,2,3,5],3);
kthSmallestPrimeFraction([1,7],1);
