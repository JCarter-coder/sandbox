var filter = function(arr, fn) {
    let size = 0;
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            arr[size] = arr[i];
            size++;
        }
    }
    while (arr.length > size) {
        arr.pop();
    }
    console.log(arr);
};

filter([0,10,20,30], function greaterThan10(n) { return n > 10; });
filter([1,2,3], function firstIndex(n, i) { return i === 0; });
filter([-2,-1,0,1,2], function plusOne(n) { return n + 1 });