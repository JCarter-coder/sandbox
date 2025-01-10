type letterCount = {
    [key: string]: number;
}

function wordSubsets(words1: string[], words2: string[]): string[] {
    const count = (S: string): number[] => {
        const ans = new Array(26).fill(0);
        for (let c of S) {
            ans[c.charCodeAt(0) - 97]++;
        }
        return ans;
    }

    const bmax = count("");
    
    for (let b of words2) {
        let bCount = count(b);
        for (let i = 0; i < 26; i++) {
            bmax[i] = Math.max(bmax[i], bCount[i]);
        }
    }

    const ans = new Array();

    search: for (let a of words1) {
        const aCount = count(a);
        for (let i = 0; i < 26; i++) {
            if (aCount[i] < bmax[i]) continue search;
        }
        ans.push(a);
    }

    console.log(ans);
    return ans;
};

wordSubsets(["amazon","apple","facebook","google","leetcode"],["e","o"]);
wordSubsets(["amazon","apple","facebook","google","leetcode"],["l","e"]);
