var createCounter = function(init) {
    let currentCount = init;
    return {
        increment: function() {
            return ++currentCount;
        },
        decrement: function() {
            return --currentCount;
        },
        reset: function() {
            currentCount = init;
            return currentCount;
        }
    }
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
