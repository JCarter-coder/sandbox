var findRelativeRanks = function(score) {
    let result = [];
    let orderedScore = score.toSorted((a,b) => b - a);
    const ranks = new Map();
    for (let i = 0; i < orderedScore.length; i++) {
        ranks.set(orderedScore[i], i);
    }
    console.log(ranks);
    console.log(score);
    console.log(orderedScore);

    let index = 0;

    while (index < score.length) {
        if (score[index] === orderedScore[0]) {
            result.push("Gold Medal");
        } else if (score[index] === orderedScore[1]) {
            result.push("Silver Medal");
        } else if (score[index] === orderedScore[2]) {
            result.push("Bronze Medal");
        } else result.push((ranks.get(score[index]) + 1).toString());
        index++;
    }
    console.log(result);
};

findRelativeRanks([5,4,3,2,1]);
findRelativeRanks([10,3,8,9,4]);