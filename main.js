var throttle = function(fn, t) {
    let intervalInProgress = null;
    let argsToProcess = null;

    const intervalFunction = () => {
        if (argsToProcess === null) {
            clearInterval(intervalInProgress);
            // enter the waiting phase
            intervalInProgress = null;
        } else {
            fn(...argsToProcess);
            argsToProcess = null;
        }
    };
    
    return function(...args) {
        if (intervalInProgress) {
            argsToProcess = args;
        } else {
            // enter the looping phase
            fn(...args);
            intervalInProgress = setInterval(intervalFunction, t);
        }
    }
};

throttle(100,[{"t":20,"inputs":[1]}]);
throttle(50,[{"t":50,"inputs":[1]},{"t":75,"inputs":[2]}]);
throttle(70,[{"t":50,"inputs":[1]},{"t":75,"inputs":[2]},{"t":90,"inputs":[8]},{"t": 140, "inputs":[5,7]},{"t": 300, "inputs": [9,4]}]);
