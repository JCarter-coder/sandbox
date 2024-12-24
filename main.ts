function isValid(s: string): boolean {
    let result: boolean = false;
    let parentheses = 0;
    let brackets = 0;
    let curlyBrackets = 0;
    const queue: ("(" | "[" | "{") [] = new Array();

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "(") {
            parentheses++;
            queue.push("(");
        } else if (s.charAt(i) === ")") {
            if (queue[queue.length - 1] === "(") {
                parentheses--;
                queue.pop();
            } else {
                console.log(result);
                return result;
            }
        }
        if (s.charAt(i) === "[") {
            brackets++;
            queue.push("[");
        } else if (s.charAt(i) === "]") {
            if (queue[queue.length - 1] === "[") {
                brackets--;
                queue.pop();
            } else {
                console.log(result);
                return result;
            }
        }
        if (s.charAt(i) === "{") {
            curlyBrackets++;
            queue.push("{");
        } else if (s.charAt(i) === "}") {
            if (queue[queue.length - 1] === "{") {
                curlyBrackets--;
                queue.pop();
            } else {
                console.log(result);
                return result;
            }
        }
        if (
            parentheses < 0 ||
            brackets < 0 ||
            curlyBrackets < 0
        ) break
    }

    if (
        parentheses === 0 &&
        brackets === 0 &&
        curlyBrackets === 0 &&
        queue.length === 0
    ) {
        result = true;
        console.log(result);
        return result;
    }

    console.log(result);
    return result;
};

isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("([])");
isValid("([)]");
isValid("[");
