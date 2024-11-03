/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index1 = m - 1;
    let index2 = n - 1;

    for (let pointer = m + n - 1; pointer >= 0; pointer--) {
        if (index2 < 0) break;
        if (index1 >= 0 && nums1[index1] > nums2[index2]) {
            nums1[pointer] = nums1[index1--];
        } else nums1[pointer] = nums2[index2--];
    }

    console.log(nums1);
};

merge([1,2,3,0,0,0],3,[2,5,6],3);
merge([1],1,[],0);
merge([0],0,[1],1);
merge([1,2,3,0,0,0],3,[4,5,6],3);

 