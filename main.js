import { MaxPriorityQueue } from "./node_modules/datastructures-js/index";
function maxAverageRatio(classes, extraStudents) {
    const getNext = (a, b) => {
        return [a[0] * b[1] - a[1] * b[0], a[1] * b[1]];
    };
    const heap = new MaxPriorityQueue({ compare: (a, b) => a.diff[1] * b.diff[0] - a.diff[0] * b.diff[1]
    });
    let sum = 0;
    for (let i = 0; i < classes.length; i++) {
        sum += classes[i][0] / classes[i][1];
        if (classes[i][0] === classes[i][1])
            continue;
        heap.enqueue({
            goal: [classes[i][0] + 1, classes[i][1] + 1],
            diff: getNext([classes[i][0] + 1, classes[i][1] + 1], classes[i])
        });
    }
    while (extraStudents > 0 && !heap.isEmpty()) {
        const grade = heap.dequeue();
        sum += grade.diff[0] / grade.diff[1];
        heap.enqueue({
            goal: [grade.goal[0] + 1, grade.goal[1] + 1],
            diff: getNext([grade.goal[0] + 1, grade.goal[1] + 1], [grade.goal[0], grade.goal[1]])
        });
        extraStudents--;
    }
    console.log(sum / classes.length);
    return sum / classes.length;
}
;
maxAverageRatio([[1, 2], [3, 5], [2, 2]], 2);
maxAverageRatio([[2, 4], [3, 9], [4, 5], [2, 10]], 4);
