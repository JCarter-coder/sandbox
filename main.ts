function repairCars(ranks: number[], cars: number): number {
    let low = 1;
    let high = ranks[0] * cars * cars;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        let carsRepaired = 0;

        for (let rank of ranks) {
            carsRepaired += Math.floor(Math.sqrt(mid / rank));
        }

        if (carsRepaired < cars) low = mid + 1;
        else high = mid;
    }

    console.log(low);
    return low;
};

repairCars([4,2,3,1],10);
repairCars([5,1,8],6);
