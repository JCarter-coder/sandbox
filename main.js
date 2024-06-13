var minMovesToSeat = function(seats, students) {
    seats.sort((a,b) => a - b);
    students.sort((a,b) => a - b);
    let minMoves = 0;

    for (let i = 0; i < seats.length; i++) {
        minMoves += Math.abs(seats[i] - students[i])
    }

    console.log(minMoves);
};

minMovesToSeat([3,1,5],[2,7,4]);
minMovesToSeat([4,1,5,9],[1,3,2,6]);
minMovesToSeat([2,2,6,6],[1,3,2,6]);
