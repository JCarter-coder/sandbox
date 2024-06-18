var maxProfitAssignment = function(difficulty, profit, worker) {
    const tasks = [];
    for (let i = 0; i < difficulty.length; i++) {
        tasks.push([difficulty[i], profit[i]]);
    }
    tasks.sort((a,b) => b[1] - a[1]);
    worker.sort((a,b) => b - a);
    console.log(tasks);
    console.log(worker);
    let workerIndex = 0;
    let taskIndex = 0;
    let maxProfit = 0;

    while (workerIndex < worker.length && taskIndex < tasks.length) {
        if (tasks[taskIndex][0] > worker[workerIndex]) {
            console.log(`${tasks[taskIndex][0]}:${worker[workerIndex]}`)
            taskIndex++;
            continue;
        }
        console.log(`Add: ${tasks[taskIndex][1]}`);
        maxProfit += tasks[taskIndex][1];
        workerIndex++;
    }
    console.log(maxProfit);
};

maxProfitAssignment([2,4,6,8,10],[10,20,30,40,50],[4,5,6,7]);
maxProfitAssignment([85,47,57],[24,66,99],[40,25,25]);
maxProfitAssignment([68,35,52,47,86],[67,17,1,81,3],[92,10,85,84,82]);
