var compose = function(functions) {

    return function(x) {
        if (functions.length === 0) {
            return x;
        }
        const result = functions.reduceRight((acc, f) =>
            f(acc), x
        );
        return result;
    }
};

const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
//const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
//const fn = compose([]);
console.log(fn(4))