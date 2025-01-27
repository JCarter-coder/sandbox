"use strict";
function checkIfPrerequisite(numCourses, prerequisites, queries) {
    const dfs = (ins, outs, matrix, vertex) => {
        for (const next of outs[vertex]) {
            if (matrix[next].length === 0) {
                matrix[next] = Array.from(matrix[vertex]);
            }
            else {
                matrix[next][0] |= matrix[vertex][0];
                matrix[next][1] |= matrix[vertex][1];
                matrix[next][2] |= matrix[vertex][2];
                matrix[next][3] |= matrix[vertex][3];
            }
            matrix[next][vertex >> 5] |= 1 << (vertex & 31);
            if (--ins[next] === 0)
                dfs(ins, outs, matrix, next);
        }
    };
    const outs = new Array(numCourses);
    for (let i = 0; i < numCourses; i++) {
        outs[i] = [];
    }
    const ins = new Uint8Array(numCourses);
    for (let i = 0; i < prerequisites.length; i++) {
        ins[prerequisites[i][1]]++;
        outs[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    const matrix = new Array(numCourses).fill([]);
    for (let i = 0; i < numCourses; i++) {
        if (ins[i] === 0 && matrix[i].length === 0) {
            matrix[i] = [0, 0, 0];
            dfs(ins, outs, matrix, i);
        }
    }
    const result = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
        const u = queries[i][0];
        result[i] = (matrix[queries[i][1]][u >> 5] & (1 << (u & 31))) !== 0;
    }
    console.log(result);
    return result;
}
;
checkIfPrerequisite(2, [[1, 0]], [[0, 1], [1, 0]]);
checkIfPrerequisite(2, [], [[1, 0], [0, 1]]);
checkIfPrerequisite(3, [[1, 2], [1, 0], [2, 0]], [[1, 0], [1, 2]]);
