var minDays = function(bloomDay, m, k) {
    let start = 0;
    let end = Math.max(...bloomDay);
    let minDays = -1;

    let getNumberOfBouquets = function(bloomDay, mid, k) {
        let numberOfBouquets = 0;
        let count = 0;

        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= mid) count++;
            else count = 0;

            if (count === k) {
                numberOfBouquets++;
                count = 0;
            }
        }
        return numberOfBouquets;
    }

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (getNumberOfBouquets(bloomDay, mid, k) >= m) {
            minDays = mid;
            end = mid - 1;
        } else start = mid + 1;
    }

    console.log(minDays);
};

minDays([1,10,3,10,2],3,1);
minDays([1,10,3,10,2],3,2);
minDays([7,7,7,7,12,7,7],2,3);
