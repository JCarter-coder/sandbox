var sortedSquares = function(nums) {
    const squares = nums.map((a) => a**2);
    const sortedSquares = squares.sort((a,b) => a - b);
    console.log(sortedSquares);
};

sortedSquares([-4,-1,0,3,10]);
sortedSquares([-7,-3,2,3,11]);
