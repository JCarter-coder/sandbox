var jsonStringify = function(object) {
    if (object === null) {
        return 'null';
    }
    if (Array.isArray(object)) {
        const elements = object.map((element) => jsonStringify(element));
        return `[${elements.join(',')}]`;
    }
    if (typeof object === 'object') {
        const keys = Object.keys(object);
        const keyValuePairs = keys.map((key) => 
        `"${key}":${jsonStringify(object[key])}`);
        return `{${keyValuePairs.join(',')}}`;
    }
    if (typeof object === 'string') {
        return `"${object}"`;
    }
    return String(object);
};

console.log(jsonStringify({"y":1,"x":2}));
console.log(jsonStringify({"a":"str","b":-12,"c":true,"d":null}));
console.log(jsonStringify({"key":{"a":1,"b":[{},null,"Hello"]}}));
console.log(jsonStringify(true));
