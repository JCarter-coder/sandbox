function maximumCandies(candies: number[], k: number): number {
    let maxCandiesInPile = 0;
    candies.forEach((candy) => {
        maxCandiesInPile = Math.max(maxCandiesInPile, candy);
    });

    const canAllocateCandies = (
        candies: number[],
        k: number,
        numOfCandies: number
    ): boolean => {
        let maxNumOfChildren = 0;

        for (let pileIndex = 0; pileIndex < candies.length; pileIndex++) {
            maxNumOfChildren += Math.floor(candies[pileIndex] / numOfCandies);
        }

        return maxNumOfChildren >= k;
    }

    let left = 0;
    let right = maxCandiesInPile;

    while (left < right) {
        let middle = Math.floor((left + right + 1) / 2);

        if (canAllocateCandies(candies, k, middle)) {
            left = middle;
        } else {
            right = middle - 1;
        }
    }

    console.log(left);
    return left;
};

maximumCandies([5,8,6],3);
maximumCandies([2,5],11);
