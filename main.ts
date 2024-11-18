function shareCandies(candies: number[], k: number): number {
    let uniqueFlav = 0;
    const flavFreq = new Map();

    for (let c of candies) {
        if (!flavFreq.has(c)) {
            flavFreq.set(c, 1);
        } else {
            flavFreq.set(c, flavFreq.get(c) + 1);
        }
        if (flavFreq.get(c) === 1) {
            uniqueFlav++;
        }
    }

    let usedInWindow = 0;

    for (let i = 0; i < k; i++) {
        flavFreq.set(candies[i], flavFreq.get(candies[i]) - 1);
        if (flavFreq.get(candies[i]) === 0) {
            usedInWindow++;
        }
    }

    let maxFlav = uniqueFlav - usedInWindow;

    for (let i = k; i < candies.length; i++) {
        flavFreq.set(candies[i - k], flavFreq.get(candies[i - k]) + 1);
        if (flavFreq.get(candies[i - k]) === 1) {
            usedInWindow--;
        }

        flavFreq.set(candies[i], flavFreq.get(candies[i]) - 1);
        if (flavFreq.get(candies[i]) === 0) {
            usedInWindow++;
        }

        maxFlav = Math.max(maxFlav, uniqueFlav - usedInWindow);
    }

    console.log(maxFlav);
    return maxFlav;
};

shareCandies([1,2,2,3,4,3],3);
shareCandies([2,2,2,2,3,3],2);
shareCandies([2,4,5],0);
