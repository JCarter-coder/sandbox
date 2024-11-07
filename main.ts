function maxProfit(prices: number[]): number {
    let minPrice: number = Number.MAX_SAFE_INTEGER;
    let maxProfit: number = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) minPrice = prices[i];
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    console.log(maxProfit);
    return maxProfit;
};

maxProfit([7,1,5,3,6,4]);
maxProfit([7,6,4,3,1]);
