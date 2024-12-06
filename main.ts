function fizzBuzz(n: number): string[] {
    const result: string[] = new Array();
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else result.push((i).toString());
    }

    console.log(result);
    return result;
};

fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(15);
