var argumentsLength = function(...args) {  
    let count = 0; 
    for (const arg of args) {
        count++;
    }
    console.log(count);
};

argumentsLength(5);
argumentsLength({}, null, "3");
