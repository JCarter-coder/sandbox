var map = function(arr, fn) {
    let returnedArray = new Int32Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        returnedArray[i] = fn(arr[i], i);
    }
    console.log(returnedArray);
};

map([1,2,3], function plusone(n) { return n + 1; });
map([1,2,3], function plusI(n, i) { return n + i; });
map([10,20,30], function constant(n, i) { return 42; });