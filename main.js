var convert = function(s, numRows) {
    if (numRows === 1) return s;

    let result = "";
    let n = s.length;
    let zigzag = 2 * (numRows - 1);

    for (let currRow = 0; currRow < numRows; ++currRow) {
        let index = currRow;
        
        while (index < n) {
            result += s[index];
            // If current row is not first or last,
            // then we have to add one more character
            // to current section
            if (currRow != 0 && currRow != numRows - 1) {
                let charsInBetween = zigzag - 2 * currRow;
                let secondIndex = index + charsInBetween;

                if (secondIndex < n) result += s[secondIndex];
            }
            // Jump to same row's first char of next zigzag
            index += zigzag;
        }
    }
    
    console.log(result);
};

convert("PAYPALISHIRING",3);
convert("PAYPALISHIRING",4);
convert("A",1);