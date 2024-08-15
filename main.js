var lemonadeChange = function(bills) {
    let fives = 0;
    let tens = 0;
    let twenties = 0;
    let result = true;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) fives++;
        else if (bills[i] === 10) {
            if (fives > 0) {
                tens++;
                fives--;
            } else {
                result = false;
                break;
            }
        } else if (bills[i] === 20) {
            if (tens > 0 && fives > 0) {
                twenties++;
                tens--;
                fives--;
            } else if (fives >= 3) {
                twenties++;
                fives -= 3;
            } else {
                result = false;
                break;
            }
        }
    }
    console.log(result);
};

lemonadeChange([5,5,5,10,20]);
lemonadeChange([5,5,10,10,20]);
