import { Deque } from "./node_modules/datastructures-js/index.js";
function maxTaskAssign(tasks, workers, pills, strength) {
    const check = (mid) => {
        let p = pills;
        let ws = new Deque();
        let ptr = M - 1;
        for (let i = mid - 1; i >= 0; --i) {
            while (ptr >= M - mid && workers[ptr] + strength >= tasks[i]) {
                ws.pushFront(workers[ptr]);
                --ptr;
            }
            if (ws.isEmpty()) {
                return false;
            }
            else if (ws.back() >= tasks[i]) {
                ws.popBack();
            }
            else {
                if (!p)
                    return false;
                --p;
                ws.popFront();
            }
        }
        return true;
    };
    tasks.sort((a, b) => a - b);
    workers.sort((a, b) => a - b);
    const N = tasks.length;
    const M = workers.length;
    let left = 1;
    let right = Math.min(N, M);
    let ans = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            ans = mid;
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    console.log(ans);
    return ans;
}
;
maxTaskAssign([3, 2, 1], [0, 3, 3], 1, 1);
maxTaskAssign([5, 4], [0, 0, 0], 1, 5);
maxTaskAssign([10, 15, 30], [0, 10, 10, 10, 10], 3, 10);
