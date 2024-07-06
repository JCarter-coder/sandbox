var passThePillow = function(n, time) {
    let index = 1;
    let direction = 1;
    while (time > 0) {
        if (direction + index > 0 && direction + index <= n) {
            index += direction;
            time--;
        } else direction *= -1;
    }
    console.log(index);
};

passThePillow(4,5);
passThePillow(3,2);
passThePillow(18,38);