"use strict";
function finalPrices(prices) {
    const answer = new Array();
    /* const sortedPrices: number[][] = new Array();

    for (let i = 0; i < prices.length; i++) {
        sortedPrices.push([i, prices[i]]);
    }

    sortedPrices.sort((a,b) => a[1] - b[1]);
    console.log(sortedPrices); */
    for (let i = 0; i < prices.length; i++) {
        let discount = 0;
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                discount = prices[j];
                break;
            }
        }
        answer.push(prices[i] - discount);
    }
    console.log(answer);
    return answer;
}
;
finalPrices([8, 4, 6, 2, 3]);
finalPrices([1, 2, 3, 4, 5]);
finalPrices([10, 1, 1, 6]);
