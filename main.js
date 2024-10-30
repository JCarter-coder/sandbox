/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    let N = nums.length;
    let numsList = [];
    for (let num of nums) {
        numsList.push(num);
    }

    let lowerBound = (lis, target) => {
        let left = 0;
        let right = lis.length - 1;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (lis[mid] >= target) right = mid - 1;
            else left = mid + 1;
        }
        return left;
    }

    let getLongestIncreasingSubsequenceLength = (v) => {
        let lisLen = new Array(v.length).fill(1);
        let lis = [];
        lis.push(v[0]);

        for (let i = 1; i < v.length; i++) {
            let index = lowerBound(lis, v[i]);
            if (index === lis.length) lis.push(v[i]);
            else lis[index] = v[i];
            lisLen[i] = lis.length;
        }

        return lisLen;
    }

    let lisLength = getLongestIncreasingSubsequenceLength(numsList);
    numsList = numsList.reverse();

    let ldsLength = getLongestIncreasingSubsequenceLength(numsList);
    ldsLength = ldsLength.reverse();

    let minRemovals = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < N; i++) {
        if (lisLength[i] > 1 && ldsLength[i] > 1) {
            minRemovals = Math.min(
                minRemovals,
                N - lisLength[i] - ldsLength[i] + 1
            );
        }
    }

    console.log(minRemovals);
};

minimumMountainRemovals([1,3,1]);
minimumMountainRemovals([2,1,1,5,6,2,3,1]);
