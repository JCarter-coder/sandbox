var compactObject = function(obj) {
    const stack = [[obj, Array.isArray(obj) ? [] : {}]];
    let result = stack[0][1];

    while (stack.length > 0) {
        const [currObj, newCurrObj] = stack.pop();

        for (const key in currObj) {
            const val = currObj[key];

            if (!val) continue;

            if (typeof val !== 'object') {
                Array.isArray(newCurrObj) ? newCurrObj.push(val) :
                    newCurrObj[key] = val;
                continue;
            }

            const newSubObj = Array.isArray(val) ? [] : {};
            Array.isArray(newCurrObj) ? newCurrObj.push(newSubObj) :
                newCurrObj[key] = newSubObj;
            stack.push([val, newSubObj]);
        }
    }
    console.log(result);
    return result;
};

compactObject([null, 0, false, 1]);
compactObject({"a": null, "b": [false, 1]});
compactObject([null, 0, 5, [0], [false, 16]]);
