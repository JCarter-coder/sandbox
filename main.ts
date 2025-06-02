function candy(ratings: number[]): number {
    const count = (n: number): number => {
        return (n * (n + 1)) / 2;
    }

    if (ratings.length <= 1) {
        console.log(ratings.length);
        return ratings.length;
    }
    let candies = 0;
    let up = 0;
    let down = 0;
    let oldSlope = 0;
    for (let i = 1; i < ratings.length; i++) {
        let newSlope = (
            ratings[i] > ratings[i - 1] ? 
            1 :
            ratings[i] < ratings[i - 1] ?
            -1 :
            0
        );
        if (
            (oldSlope > 0 && newSlope == 0) ||
            (oldSlope < 0 && newSlope >= 0)
        ) {
            candies += count(up) + count(down) + Math.max(up, down);
            up = 0;
            down = 0;
        }
        if (newSlope > 0) {
            up++;
        } else if (newSlope < 0) {
            down++;
        } else {
            candies++;
        }
        oldSlope = newSlope;
    }
    candies += count(up) + count(down) + Math.max(up, down) + 1;
    console.log(candies);
    return candies;
};

candy([1,0,2]);
candy([1,2,2]);
