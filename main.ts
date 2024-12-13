function findScore(nums: number[]): number {
    let score: number = 0;
    const sorted: number[][] = new Array();
    const marked: boolean[] = new Array(nums.length).fill(false);

    // create a 2D array of [val, index]
    for (let i = 0; i < nums.length; i++) {
        sorted.push([nums[i], i]);
    }
    sorted.sort((a,b) => a[0] - b[0]);
    
    for (let i = 0; i < sorted.length; i++) {
        if (marked[sorted[i][1]] === false) {
            score += sorted[i][0];
            //console.log(`Score is now... ${score}`);
            marked[sorted[i][1]] = true;

            if (marked[sorted[i][1] + 1] === false) {
                marked[sorted[i][1] + 1] = true;
            }
    
            if (marked[sorted[i][1] - 1] === false) {
                marked[sorted[i][1] - 1] = true;
            }
        }
    }

    console.log(score);
    return score;
};

findScore([2,1,3,4,5,2]);
findScore([2,3,5,1,3,2]);
