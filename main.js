var addMinimum = function(word) {
    let count = 0;
    let array = word.split('');
    let i = 0;
    let next = 'a';
    while (array[i]) {
        // if array[i] is the next value, recalculate
        // next value and analyze the next index
        if (array[i] === next) {
            i++;
        } else count++;
        
        next = (next === 'a' ? 'b' : (next === 'b' ? 'c' : 'a'));        
    }
    if (array[array.length - 1] === 'a') {
        count += 2;
    } else if (array[array.length - 1] === 'b') {
        count++;
    }

    console.log(count);
    return count;
};

addMinimum("b");
addMinimum("aaa");
addMinimum("abc");
