function wordPattern(pattern: string, s: string): boolean {
    let result: boolean = true;
    const sArray: string[] = s.split(' ');

    if (pattern.length !== sArray.length) {
        result = false;
        console.log(result);
        return result;
    }
    
    const mapped: (string | boolean)[] = new Array(26);

    for (let index = 0; index < 26; index++) {
        mapped[index] = false;
    }

    for (let i = 0; i < pattern.length; i++) {
        if (mapped[pattern.charCodeAt(i) - 97] === false) {
            if (mapped.find((word) => word === sArray[i])) {
                result = false;
                break;
            } else mapped[pattern.charCodeAt(i) - 97] = sArray[i];
        } else if (mapped[pattern.charCodeAt(i) - 97] !== sArray[i]) {
            result = false;
            break;
        }
    }

    console.log(result);
    return result;
};

wordPattern("abba","dog cat cat dog");
wordPattern("abba","dog cat cat fish");
wordPattern("aaaa","dog cat cat dog");
wordPattern("abba","dog dog dog dog");
