var maxScoreWords = function(words, letters, score) {
    let n = words.length;
    let result = 0;

    // count how many times each letter occurs
    let freq = new Array(26).fill(0);
    for (let letter of letters) {
        freq[letter.charCodeAt(0) - 97]++;
    }

    // calculate the value of the words
    let wordScores = {};
    for (let word of words) {
        let wordScore = 0;
        for (let c of word) {
            wordScore += score[c.charCodeAt(0) - 97];
        }
        wordScores[word] = wordScore;
    }

    for (let mask = 0; mask < (1 << n); mask++) {
        let curr_count = new Array(26).fill(0);
        let can_create = true;
        let cur_score = 0;

        for (let word_ind = 0; word_ind < n; word_ind++) {
            if (mask & (1 << word_ind)) {
                let word = words[word_ind];
                cur_score += wordScores[word];
                for (let c of word) {
                    let index = c.charCodeAt(0) - 97;
                    curr_count[index]++;
                    if (curr_count[index] > freq[index]) {
                        can_create = false;
                        break;
                    }
                }
            }
            if (!can_create) {
                break;
            }
        }
        if (can_create && cur_score > result) {
            result = cur_score;
        }
    }

    console.log(result);
    return result;
};

maxScoreWords(["dog","cat","dad","good"],["a","a","c","d","d","d","g","o","o"],[1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]);
maxScoreWords(["xxxz","ax","bx","cx"],["z","a","b","c","x","x","x"],[4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]);
maxScoreWords(["leetcode"],["l","e","t","c","o","d"],[0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]);
