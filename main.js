var largestPerimeter = function(nums) {
  nums.sort((a, b) => a - b);
  let sum = nums[0] + nums[1]; //assign first two lengthes
  let maxPerimeter = 0;
  for (let i = 2; i < nums.length; i++) {
    // evaluate the next indexed side
    if (sum > nums[i]) {
      sum += nums[i];
      maxPerimeter = sum;
    } else {
      sum += nums[i];
    }
  }
  if (maxPerimeter === 0) {
    console.log(`-1`);
  } else console.log(maxPerimeter);
};

largestPerimeter([5,5,5]);
largestPerimeter([1,12,1,2,5,50,3]);
largestPerimeter([5,5,50])
