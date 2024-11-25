function slidingPuzzle(board: number[][]): number {
    const directions: number[][] = [
        [1,3],
        [0,2,4],
        [1,5],
        [0,4],
        [1,3,5],
        [2,4]
    ];

    const swap = (str: string, i: number, j: number): string => {
        let sb = str.split('');
        sb[i] = str.charAt(j);
        sb[j] = str.charAt(i);
        return sb.join('');
    }

    let target: string = "123450";
    let startState: string = "";

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            startState += board[i][j];
        }
    }

    const visited = new Set();
    const queue = new Array();
    queue.push(startState);
    visited.add(startState);

    let moves: number = 0;

    while (queue.length !== 0) {
        let size = queue.length;
        while (size-- > 0) {
            let currentState: string = queue.shift();

            if (currentState === target) {
                console.log(moves);
                return moves;
            }

            let zeroPos = currentState.indexOf('0');

            for (let newPos of directions[zeroPos]) {
                let nextState = swap(currentState, zeroPos, newPos);
                
                if (visited.has(nextState)) continue;

                visited.add(nextState);
                queue.push(nextState);
            }
        }
        moves++;
    }

    console.log(-1);
    return -1;
};

slidingPuzzle([[1,2,3],[4,0,5]]);
slidingPuzzle([[1,2,3],[5,4,0]]);
slidingPuzzle([[4,1,2],[5,0,3]]);
