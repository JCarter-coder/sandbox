function minimumRecolors(blocks: string, k: number): number {
    let left = 0;
    let white = 0;
    let colorChange: number = Number.MAX_SAFE_INTEGER;
    
    for (let right = 0; right < blocks.length; right++) {
        if (blocks.charAt(right) === 'W') white++;

        if (right - left + 1 === k) {
            colorChange = Math.min(colorChange, white);

            if (blocks.charAt(left) === 'W') white--;

            left++;
        }
    }
    
    console.log(colorChange);
    return colorChange;
};

minimumRecolors("WBBWWBBWBW",7);
minimumRecolors("WBWBBBW",2);
minimumRecolors("BWWWBB",6);
