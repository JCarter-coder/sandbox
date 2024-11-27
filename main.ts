function canCompleteCircuit(gas: number[], cost: number[]): number {
    let currGain:number = 0;
    let totalGain:number = 0;
    let answer:number = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGain += gas[i] - cost[i];
        currGain += gas[i] - cost[i];

        if (currGain < 0) {
            answer = i + 1;
            currGain = 0;
        }
    }

    console.log(totalGain >= 0 ? answer : -1);
    return totalGain >= 0 ? answer : -1;
};

canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]);
canCompleteCircuit([2,3,4],[3,4,3]);
