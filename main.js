var numberOfCleanRooms = function(room) {
    const DIRECTIONS = [0, 1, 0, -1, 0];
    let rows = room.length;
    let cols = room[0].length;
    let visited = new Set();
    let cleaned = new Set();

    let clean = function(room, rows, cols, row, col, direction,
        visited, cleaned) {
        // if the robot already visited this space facing this
        // direction, return the number of spaces cleaned
        if (visited.has(row + "," + col + "," + direction)) {
            console.log(cleaned.size);
            return cleaned.size;
        }

        // mark the space as visited facing this direction
        // and cleaned
        visited.add(row + "," + col + "," + direction);
        cleaned.add(row + "," + col);

        // clean the next space straight ahead if it's
        // empty and in the room
        let nextRow = row + DIRECTIONS[direction];
        let nextCol = col + DIRECTIONS[direction + 1];
        if (0 <= nextRow && nextRow < rows && 0 <= nextCol &&
            nextCol < cols && room[nextRow][nextCol] === 0) {
            return clean(room, rows, cols, nextRow, nextCol, direction,
                visited, cleaned);
        }

        // otherwise turn right and clean the current space
        return clean(room, rows, cols, row, col, (direction + 1) % 4,
            visited, cleaned);
    }

    return clean(room, rows, cols, 0, 0, 0, visited, cleaned);
};

numberOfCleanRooms([[0,0,0],[1,1,0],[0,0,0]]);
numberOfCleanRooms([[0,1,0],[1,0,0],[0,0,0]]);
numberOfCleanRooms([[0,0,0],[0,0,0],[0,0,0]]);
