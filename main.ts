function arraysIntersection(arr1: number[], arr2: number[], arr3: number[]): number[] {
    let index1: number = 0;
    let index2: number = 0;
    let index3: number = 0;
    const ans: number[] = [];
    let referenceNumber = Math.max(arr1[0],arr2[0],arr3[0])

    while (
        index1 < arr1.length &&
        index2 < arr2.length &&
        index3 < arr3.length
    ) {
        if (
            arr1[index1] === arr2[index2] &&
            arr2[index2] === arr3[index3]
        ) {
            ans.push(arr1[index1]);
            index1++;
            index2++;
            index3++;
        }
        referenceNumber = Math.max(
            arr1[index1],
            arr2[index2],
            arr3[index3]
        );

        while (arr1[index1] < referenceNumber) {
            index1++;
        }
        while (arr2[index2] < referenceNumber) {
            index2++;
        }
        while (arr3[index3] < referenceNumber) {
            index3++;
        }
    }
    console.log(ans);
    return ans;
};

arraysIntersection(
    [1,2,3,4,5],
    [1,2,5,7,9],
    [1,3,4,5,8]
);
arraysIntersection(
    [197,418,523,876,1356],
    [501,880,1593,1710,1870],
    [521,682,1337,1395,1764]
);
arraysIntersection(
    [1,2,3,4,5,10],
    [1,2,5,7,9,10],
    [1,3,4,5,8,10]
);
