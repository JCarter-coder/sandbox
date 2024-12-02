function isPrefixOfWord(sentence: string, searchWord: string): number {
    const stringArray = sentence.split(' ');
    let ans: number = -1;

    for (let word of stringArray) {
        if (word.startsWith(searchWord)) {
            ans = stringArray.indexOf(word) + 1;
            break;
        }
    }
    console.log(ans);
    return ans;
};

isPrefixOfWord("i love eating burger","burg");
isPrefixOfWord("this problem is an easy problem","pro");
isPrefixOfWord("i am tired","you");
