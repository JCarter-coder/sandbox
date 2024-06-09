var curry = function(fn) {
    
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }

        return curried.bind(this, ...args);
    }
};

curry(function sum(a, b, c) { return a + b + c; },[[1],[2],[3]]);
curry(function sum(a, b, c) { return a + b + c; },[[1,2],[3]]);
curry(function sum(a, b, c) { return a + b + c; },[[],[],[1,2,3]]);
curry(function life() { return 42; },[[]]);
