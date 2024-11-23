function rotateTheBox(box: string[][]): string[][] {
    let m: number = box.length;
    let n: number = box[0].length;

    // turnedBox, exchange m and n
    let turnedBox: string[][] = new Array();

    // populate turnedBox by reading each column of box,
    // from the bottom row up, and push it into turnedBox
    for (let j = 0; j < n; j++) {
        let temp = [];
        for (let i = m - 1; i >= 0; i--) {
            temp.push(box[i][j]);
        }
        turnedBox.push(temp);
    }

    // apply gravity
    for (let j = 0; j < m; j++) {
        let lowestRowWithEmptyCell = n - 1;
        for (let i = n - 1; i >= 0; i--) {
            if (turnedBox[i][j] === '#') {
                turnedBox[i][j] = '.';
                turnedBox[lowestRowWithEmptyCell][j] = '#';
                lowestRowWithEmptyCell--;
            }

            if (turnedBox[i][j] === '*') {
                lowestRowWithEmptyCell = i - 1;
            }
        }
    } 
        
    console.log(turnedBox);
    return turnedBox;
};

rotateTheBox([["#",".","#"]]);
rotateTheBox([
    ["#",".","*","."],
    ["#","#","*","."]
]);
rotateTheBox([
    ["#","#","*",".","*","."],
    ["#","#","#","*",".","."],
    ["#","#","#",".","#","."]
]);
