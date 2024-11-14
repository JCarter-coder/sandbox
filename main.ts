function minimizedMaximum(n: number, quantities: number[]): number {
    
    function canDistribute(x: number, quantities: number[], n: number): boolean {
        // Pointer to the first not fully distributed product type
        let j = 0;
        // Remaining quantity of the jth product type
        let remaining = quantities[j];

        // Loop through each store
        for (let i = 0; i < n; i++) {
            // check if the remaining quantity of the jth project type
            // can be fully distributed to the ith store
            if (remaining <= x) {
                // if yes, move the pointer to the next product type
                j++;
                // check if all products have been distributed
                if (j === quantities.length) return true;
                else remaining = quantities[j];
            } else remaining -= x;
        }
        return false;
    }

    let left = 0; 
    let right = 0;

    // Find the maximum element in quantities
    for (let quantity of quantities) {
        if (quantity > right) right = quantity;
    }

    // Perform binary search until the boundaries converge
    while (left < right) {
        let middle = Math.floor((left + right) / 2);
        if (canDistribute(middle, quantities, n)) {
            // try for a smaller maximum
            right = middle;
        } else {
            // increase the minimum possible maximum
            left = middle + 1;
        }
    }
    console.log(left);
    return left;
};

minimizedMaximum(6,[11,6]);
minimizedMaximum(7,[15,10,10]);
minimizedMaximum(1,[100000]);
minimizedMaximum(3,[1000,5]);
