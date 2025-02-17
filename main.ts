function numTilePossibilities(tiles: string): number {
    const freq: { [letter: string]: number } = {};
    for (const tile of tiles) {
        freq[tile] = (freq[tile] || 0) + 1;
    }
    const letters = Object.keys(freq);

    let poly: number[] = [1];

    for (const letter of letters) {
        const f = freq[letter];
        const series: number[] = [];
        let fact = 1;
        for (let j = 0; j <= f; j++) {
            series.push(1 / fact);
            fact *= (j + 1);
        }

        const newPoly: number[] = new Array(poly.length + f).fill(0);
        for (let i = 0; i < poly.length; i++) {
            for (let j = 0; j < series.length; j++) {
                newPoly[i + j] += poly[i] * series[j];
            }
        }
        poly = newPoly;
    }

    let result = 0;
    let factorial = 1;
    for (let k = 1; k < poly.length; k++) {
        factorial *= k;
        result += poly[k] * factorial;
    }

    console.log(Math.round(result));
    return Math.round(result);
};

numTilePossibilities("AAB");
numTilePossibilities("AAABBC");
numTilePossibilities("V");
