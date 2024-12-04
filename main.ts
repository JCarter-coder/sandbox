function canMakeSubsequence(str1: string, str2: string): boolean {
    let ptr1: number = 0;
    let ptr2: number = 0;
    let result: boolean = false;

    while (ptr1 < str1.length && ptr2 < str2.length) {
        if (
            str1.charCodeAt(ptr1) === str2.charCodeAt(ptr2) ||
            (str1.charCodeAt(ptr1) + 1 - 97) % 26 + 97 === str2.charCodeAt(ptr2)
        ) {
            if (ptr2 === str2.length - 1) {
                result = true;
                break;
            } else ptr2++;
        } 
        ptr1++;
    }

    console.log(result);
    return result;
};

canMakeSubsequence("abc","ad");
canMakeSubsequence("zc","ad");
canMakeSubsequence("ab","d");
