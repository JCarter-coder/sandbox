function checkPowersOfThree(n: number): boolean {

    while (n > 0) {
        if (n % 3 === 2) {
            console.log(false);
            return false;
        }

        n = Math.floor(n / 3);
    }

    console.log(true);
    return true;
};

checkPowersOfThree(12);
checkPowersOfThree(91);
checkPowersOfThree(21);
