var rearrangeArray = function(nums) {
    let container = {};
    container.pos = [];
    container.neg = [];
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= 0) {
        container.pos.push(nums[i]);
      } else container.neg.push(nums[i]);
    }
    for (let j = 0; j < nums.length/2; j++) {
      arr.push(container.pos[j]);
      arr.push(container.neg[j]);
    }
    //console.log(container.pos);
    //console.log(container.neg);
    console.log(arr);
};

rearrangeArray([3,1,-2,-5,2,-4]);
rearrangeArray([-1,1]);
