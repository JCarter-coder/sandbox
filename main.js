var partition = function(s) {
    const result = [];

    function dfs(s, path, result) {
        if (!s.length) {
            result.push(path);
            return;
        }
        for (let i = 0; i < s.length; i++) {
            const cur = s.substr(0, i + 1);
            if (isPalindrome(cur)) {
                // add current substring in the currentList
                dfs(s.substr(i + 1), path.concat(cur), result);
                // backtrack and remove the current 
                // substring from the currentList
            }
        }
    }

    function isPalindrome(s) {
        let lo = 0;
        let hi = s.length - 1;
        while (lo < hi) {
            if (s[lo++] !== s[hi--]) return false;
        }
        return true;
    }

    dfs(s, [], result);
    console.log(result);
    return result;
};

partition("aab");
partition("a");