var countPairs = function(nums1, nums2) {
    // given nums1 and nums2 have equal length
    let n = nums1.length;
    let difference = [];
    let pairCount = 0;

    for (let i = 0; i < n; i++) {
        difference.push(nums1[i] - nums2[i]);
    }

    difference.sort((a,b) => a - b);

    let left = 0;
    let right = n - 1;
    while (left < right) {
        if (difference[left] + difference[right] > 0) {
            pairCount += right - left;
            right--;
        } else left++;
    }

    console.log(pairCount);
    return pairCount;
};

countPairs([2,1,2,1],[1,2,1,2]);
countPairs([1,10,6,2],[1,4,1,5]);
countPairs([1,1,10,6,2],[8,1,5,0,5]);

