function maximumInvitations(favorite: number[]): number {
    const N: number = favorite.length;
    const inDegree: number[] = new Array(N).fill(0);

    for (let person = 0; person < N; person++) {
        inDegree[favorite[person]]++;
    }

    const q: number[] = new Array();
    for (let person = 0; person < N; person++) {
        if (inDegree[person] === 0) q.push(person);
    }

    const depth: number[] = new Array(N).fill(1);

    while (q.length !== 0) {
        let currentNode = q.shift();
        if (currentNode !== undefined) {
            let nextNode = favorite[currentNode];
            depth[nextNode] = Math.max(
                depth[nextNode],
                depth[currentNode] + 1
            );
            if (--inDegree[nextNode] === 0) q.push(nextNode);
        }
    }

    let longestCycle: number = 0;
    let twoCycleInvitations: number = 0;

    for (let person = 0; person < N; person++) {
        if (inDegree[person] === 0) continue;

        let cycleLength = 0;
        let current = person;
        while (inDegree[current] !== 0) {
            inDegree[current] = 0;
            cycleLength++;
            current = favorite[current];
        }

        if (cycleLength === 2) {
            twoCycleInvitations += depth[person] + depth[favorite[person]];
        } else {
            longestCycle = Math.max(longestCycle, cycleLength);
        }
    }

    console.log(Math.max(longestCycle, twoCycleInvitations));
    return Math.max(longestCycle, twoCycleInvitations);
};

maximumInvitations([2,2,1,2]);
maximumInvitations([1,2,0]);
maximumInvitations([3,0,1,4,1]);
