var majorityElement = function(nums) {
  let count = 0;
  let candidate = null;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    };
    count += (num === candidate) ? 1 : -1;
  } 
  console.log(candidate);
};

majorityElement([3,2,3]);
majorityElement([2,2,1,1,1,2,2]);