function minDominoRotations(tops: number[], bottoms: number[]): number {
    const N = tops.length;

    const check = (
        x: number, 
        tops: number[], 
        bottoms: number[], 
        N: number
    ): number => {
        let rotationsTop = 0;
        let rotationsBottom = 0;
        for (let i = 0; i < N; i++) {
            if (tops[i] !== x && bottoms[i] !== x) {
                return -1;
            } else if (tops[i] !== x) {
                rotationsTop++;
            } else if (bottoms[i] !== x) {
                rotationsBottom++;
            }
        }
        return Math.min(rotationsTop, rotationsBottom);
    };
    
    let rotations = check(tops[0], bottoms, tops, N);
    if (rotations !== -1 || tops[0] === bottoms[0]) {
        console.log(rotations);
        return rotations;
    } else {
        rotations = check(bottoms[0], bottoms, tops, N);
        console.log(rotations);
        return rotations;
    }
};

minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2]);
minDominoRotations([3,5,1,2,3], [3,6,3,3,4]);
