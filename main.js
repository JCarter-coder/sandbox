var areDeeplyEqual = function(o1, o2) {
    if (o1 === o2) return true;
    if (o1 === null || o2 === null) return false;

    var objs = [[o1, o2]];
    
    while (objs.length) {
        [o1, o2] = objs.pop();

        if (o1 === o2) continue;
        if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;
        if (Array.isArray(o1) !== Array.isArray(o2)) return false;

        const keys1 = Object.keys(o1);
        const keys2 = Object.keys(o2);

        if (keys1.length !== keys2.length) return false;
        for (const key of keys1) {
            if (!(key in o2)) return false;
            objs.push([o1[key], o2[key]]);
        }
    }

    return true;
};

areDeeplyEqual({"x":1,"y":2},{"x":1,"y":2});
areDeeplyEqual({"y":2,"x":1},{"x":1,"y":2});
areDeeplyEqual({"x":null,"L":[1,2,3]},{"x":null,"L":["1","2","3"]});
areDeeplyEqual(true, false);
