var intersect = function(nums1, nums2) {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    let ptr1 = 0;
    let ptr2 = 0;
    let result = [];


    while (ptr1 < nums1.length && ptr2 < nums2.length) {
        if (nums1[ptr1] === nums2[ptr2]) {
            result.push(nums1[ptr1]);
            ptr1++;
            ptr2++;
        } else if (nums1[ptr1] > nums2[ptr2]) ptr2++;
        else ptr1++;
    }

    console.log(result);
};

intersect([1,2,2,1],[2,2]);
intersect([4,9,5],[9,4,9,8,4]);
intersect([4,7,9,7,6,7],[5,0,0,6,1,6,2,2,4])
