function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    console.log(maxProfit);
    return maxProfit;
};

maxProfit([7,1,5,3,6,4]);
maxProfit([1,2,3,4,5]);
maxProfit([7,6,4,3,1]);
