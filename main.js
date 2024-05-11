class QualityRatio {
    constructor(ratio, quality) {
        this.ratio = ratio;
        this.quality = quality;
    }
}

var mincostToHireWorkers = function(quality, wage, k) {
    let n = quality.length;
    let totalCost = Number.MAX_VALUE;
    let currentTotalQuality = 0;
    let qualityRatioArray = [];

    // calculate wage-to-quality ratio for each worker
    for (let i = 0; i < n; i++) {
        let temp = new QualityRatio(wage[i]/quality[i], quality[i]);
        qualityRatioArray.push(temp);
    }

    // sort wrokers based on their wage-to-quality ratio
    qualityRatioArray.sort((a,b) => a.ratio - b.ratio);

    // max-heap to store qualities
    let highQualityWorkers = [];

    for (let worker of qualityRatioArray) {
        let ratio = worker.ratio;
        let qua = worker.quality;

        currentTotalQuality += qua;
        highQualityWorkers.push(-qua);
        highQualityWorkers.sort((a,b) => a - b);

        if (highQualityWorkers.length > k) {
            currentTotalQuality += highQualityWorkers.shift();
        }
        if (highQualityWorkers.length === k) {
            totalCost = Math.min(totalCost, currentTotalQuality * ratio);
        }
    }

    console.log(totalCost);
};

mincostToHireWorkers([10,20,5],[70,50,30],2);
mincostToHireWorkers([3,1,10,10,1],[4,8,2,2,7],3);
