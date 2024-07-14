var countOfAtoms = function(formula) {
    const hashmap = {};
    const stack = [];

    for (let i = 0; i < formula.length; i++) {
        let char = formula[i];
        let nextChar = formula[i + 1];

        // Alpha
        if (char >= "A" && char <= "Z") {
            if (nextChar >= "a" && nextChar <= "z") {
                stack.push(char + nextChar);
                i++;
            } else stack.push(char);

            if (formula[i + 1] < "1" || formula[i + 1] > "9") {
                stack.push(1);
            }
        }

        // Numeric
        if (char >= "1" && char <= "9") {
            let digits = char;
            while (nextChar >= "0" && nextChar <= "9") {
                digits += nextChar;
                i++;
                nextChar = formula[i + 1];
            }
            stack.push(+digits);
        }

        // Open parentheses
        if (char === "(") stack.push(char);

        // Close parentheses
        if (char === ")") {
            let multiply = "";

            if (nextChar >= "1" && nextChar <= "9") {
                multiply += nextChar;
                i++;
                nextChar = formula[i + 1];
                while (nextChar >= "0" && nextChar <= "9") {
                    multiply += nextChar;
                    i++;
                    nextChar = formula[i + 1];
                }
            }

            if (multiply === "") multiply = 1;

            multiply = +multiply;

            // Find open parenteses
            let pointer = stack.length - 1;
            while (true) {
                if (typeof stack[pointer] === "number") {
                    stack[pointer] = stack[pointer] * multiply;
                }

                if (stack[pointer] === "(") {
                    stack[pointer] = "";
                    break;
                }

                pointer--;
            }
        }        
    }

    // Loop through the stack and insert it into hashmap
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] === "") continue;

        if (typeof stack[i] === "string") {
            const symbol = stack[i];
            const count = !stack[i + 1] ? 1 : stack[i + 1];

            if (hashmap[symbol]) hashmap[symbol] += count;
            else hashmap[symbol] = count;
        }
    }

    const result = Object.keys(hashmap)
        .sort()
        .reduce((str, key) => {
            str += `${key}${hashmap[key] === 1 ? "" : hashmap[key]}`;
            return str;
        }, "");

    console.log(result);
};

countOfAtoms("H2O");
countOfAtoms("Mg(OH)2");
countOfAtoms("K4(ON(SO3)2)2");
