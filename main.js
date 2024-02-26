var canTraverseAllPairs = function(nums) {
    let MAX = 100000;
    let N = nums.length;
    let has = new Array(MAX + 1);
    for (let x of nums) {
        has[x] = true;
    }
    console.log(has);
    if (nums.length === 1) {
        // return edge case
        console.log('true');
    }
    if (nums.includes(1)) {
        // return edge case
        console.log(`false`)
    }
    /* const maxValue = new Array(Math.max(...nums));
    console.log(...maxValue); */
    let sieve = new Array(MAX + 1);
    for (let d = 2; d <= MAX; d++) {
        if (sieve[d] === 0) {
            for (let v = d; v <= MAX; v += d) {
                sieve[v] = d;
            }
        }
    }

    let componentsEval = new DSU(2 * MAX + 1);
    for (let x of nums) {
        let val = x;
        while (val > 1) {
            let prime = sieve[val];
            let root = prime+MAX;
            if (componentsEval.find(root) !== componentsEval.find(x)) {
                componentsEval.merge(root, x);
            }
            while (val % prime === 0) {
                val /= prime;
            }
        }
    }

    let cnt = 0;
    for (let i = 2; i <= MAX; i++) {
        if (has[i] && componentsEval.find(i) === i) {
            cnt++;
        }
    }
    console.log(cnt);
    return cnt;
    
};

class DSU {

    constructor(N) {
        this.dsu = new Array(N+1);
        this.size = new Array(N+1);
        for (let i = 0; i <= N; i++) {
            this.dsu[i] = i;
            this.size[i] = 1;
        }
    }
    
    find(x) {
        return this.dsu[x] === x ? x : (this.dsu[x] = find(dsu[x]));
    }

    merge(x,y) {
        let fx = find(x);
        let fy = find(y);
        if (fx === fy) {
            return;
        }
        if (size[fx] > size[fy]) {
            let temp = fx;
            fx = fy;
            fy = temp;
        }
        dsu[fx] = fy;
        size[fy] += size[fx];
    }

}

//canTraverseAllPairs([1]);
//canTraverseAllPairs([1,2]);
canTraverseAllPairs([2,3,6]);
//canTraverseAllPairs([3,9,5]);
//canTraverseAllPairs([4,3,12,8]);

//findAllPeople(6, [[1,2,5],[2,3,8],[1,5,10]], 1);
//findAllPeople(4, [[3,1,3],[1,2,2],[0,3,3]], 3);
//findAllPeople(5, [[3,4,2],[1,2,1],[2,3,1]], 1);

