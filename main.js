var compose = function(functions) {

    return function(x) {
        if (functions.length === 0) {
            return x;
        }
        let input = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            const currFunc = functions[i];
            input = currFunc(input);
        }
        return input;
    }
};

//const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
//const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
const fn = compose([]);
console.log(fn(42))