function minZeroArray(nums: number[], queries: number[][]): number {
    const N: number = nums.length;
    const differenceArray = new Array(N + 1).fill(0);
    let k: number = 0;
    let sum: number = 0;
    
    for (let i = 0; i < N; i++) {
        while (sum + differenceArray[i] < nums[i]) {
            k++;

            if (k > queries.length) {
                console.log(-1);
                return -1;
            }

            let left = queries[k - 1][0];
            let right = queries[k - 1][1];
            let val = queries[k - 1][2];

            if (right >= i) {
                differenceArray[Math.max(left, i)] += val;
                differenceArray[right + 1] -= val;
            }
        }

        sum += differenceArray[i];
    }
    
    console.log(k);
    return k;
};

minZeroArray([2,0,2],[[0,2,1],[0,2,1],[1,1,3]]);
minZeroArray([4,3,2,1],[[1,3,2],[0,2,1]]);
minZeroArray([0],[[0,0,2],[0,0,4],[0,0,4],[0,0,3],[0,0,5]]);
