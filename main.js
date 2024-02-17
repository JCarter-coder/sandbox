var longestString = function(x, y, z) {
    let sum = 0;
    if (x >= y && y >= z) {
        if (z > 0) {
            // iterations of set x y z (e.g. "AABBAB")
            sum += (2*3) * z;
            x -= z;
            y -= z;
        }
        // add y sets of x y
        sum += (2*2) * y;
        x -= y;
        if (x > 0) {
            sum += 2;
        }
        // return
        console.log(sum);
    } else if (x >= z && z >= y) {
        if (y > 0) {
            // iterations of set z x y (e.g. "ABAABB")
            sum += (2*3) * y;
            x -= y;
            z -= y;
        }
        if (z > 0) {
            // add remaining z
            sum += 2 * z;
        }
        // add one x and return
        if (x > 0) {
            sum += 2;
        }
        // return
        console.log(sum);
    } else if (y >= x && x >= z) {
        if (z > 0) {
            //iterations of set y z x (e.g. "BBABAA")
            sum += (2*3) * z;
            y -= z;
            x -= z;
        }
        // add x sets of y x
        sum += (2*2) * x;
        y -= x;
        if (y > 0) {
            sum += 2;
        }
        // return
        console.log(sum);
    } else if (y >= z && z >= x) {
        // start at y if y is greater than x
        if (y > x) {
            sum += 2;
            y -= 1;
        }
        if (x > 0) {
            // iterations of set z x y (e.g. "ABAABB")
            sum += (2*3) * x;
            y -= x;
            z -= x;
        }
        /* // add one more y
        if (y > 0) {
            sum += 2;
        } */
        if (z > 0) {
            // add remaining z
            sum += 2 * z;
        }
        // return
        console.log(sum);
    } else if (z >= x && x >= y) {
        if (y > 0) {
            //iterations of set z x y (e.g. "ABAABB")
            sum += (2*3) * y;
            z -= y;
            x -= y;
        }
        // add remaining z
        if (z > 0) {
            sum += 2 * z;
        }
        if (x > 0) {
            // add one more x
            sum += 2;
        }
        // return
        console.log(sum);
    } else if (z >= y && y >= x) {
        if (x > 0) {
            // iterations of set y z x (e.g. "BBABAA")
            sum += (2*3) * x;
            y -= x;
            z -= x;
        }
        // add one more y
        if (y > 0) {
            sum += 2;
        }
        if (z > 0) {
            // add remaining z
            sum += 2 * z;
        }
        // return
        console.log(sum);
    }
};

//longestString(2,5,1);
//longestString(3,2,2);
//longestString(1,39,14);
//longestString(11,11,3);
longestString(3,44,44);

