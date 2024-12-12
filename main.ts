function pickGifts(gifts: number[], k: number): number {
    let remainder: number = 0;

    while (k-- > 0) {
        let maxValue = Math.max(...gifts);
        let index = gifts.indexOf(maxValue);
        gifts[index] = Math.floor(Math.sqrt(gifts[index]));
    }

    for (let i = 0; i < gifts.length; i++) {
        remainder += gifts[i];
    }

    console.log(remainder);
    return remainder;
};

pickGifts([25,64,9,4,100],4);
pickGifts([1,1,1,1],4);
