function canConstruct(ransomNote: string, magazine: string): boolean {
    let result: boolean = false;

    if (ransomNote.length > magazine.length) {
        console.log(result);
        return result;
    }

    // Populate container with letters needed for ransomNote
    const container: any = {};
    for (let i = 0; i < ransomNote.length; i++) {
        if (!container[ransomNote.charAt(i)]) {
            container[ransomNote.charAt(i)] = 1;
        } else container[ransomNote.charAt(i)]++;
    }

    // Subtract letters available from magazine
    // Every letter removed, decrement count
    let count: number = ransomNote.length;
    for (let i = 0; i < magazine.length; i++) {
        if (
            container[magazine.charAt(i)] &&
            container[magazine.charAt(i)] > 0
        ) {
            container[magazine.charAt(i)]--;
            count--;
        }
        if (count === 0) {
            result = true;
            break;
        }
    }

    console.log(result);
    return result;
};

canConstruct("a","b");
canConstruct("aa","ab");
canConstruct("aa","aab");
