var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;

    let waterAmt = (heightL, heightR, len) => {
        if (heightL <= heightR) return heightL * len;
        else return heightR * len;
    }

    let maxWater = waterAmt(height[0], height[height.length - 1], height.length - 1)

    while (left < right) {
        if (height[left] < height[right]) left++;
        else right--;
        maxWater = Math.max(
            maxWater,
            waterAmt(height[left], height[right], right - left)
        );
    }
   console.log(maxWater);
};

maxArea([1,8,6,2,5,4,8,3,7]);
maxArea([1,1]);
