function kthSmallestProduct(nums1: number[], nums2: number[], k: number): number {
    const n1 = nums1.length;
    const n2 = nums2.length;

    let pos1 = 0;
    let pos2 = 0;
    while (pos1 < n1 && nums1[pos1] < 0) {
        pos1++;
    }
    while (pos2 < n2 && nums2[pos2] < 0) {
        pos2++;
    }
    
    let left = -1e10;
    let right = 1e10;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0;
        let i1 = 0;
        let i2 = pos2 - 1;
        while (i1 < pos1 && i2 >= 0) {
            if (nums1[i1] * nums2[i2] > mid) {
                i1++;
            } else {
                count += pos1 - i1;
                i2--;
            }
        }

        i1 = pos1;
        i2 = n2 - 1;
        while (i1 < n1 && i2 >= pos2) {
            if (nums1[i1] * nums2[i2] > mid) {
                i2--;
            } else {
                count += i2 - pos2 + 1;
                i1++;
            }
        }

        i1 = 0;
        i2 = pos2;
        while (i1 < pos1 && i2 < n2) {
            if (nums1[i1] * nums2[i2] > mid) {
                i2++;
            } else {
                count += n2 - i2;
                i1++;
            }
        }

        i1 = pos1;
        i2 = 0;
        while (i1 < n1 && i2 < pos2) {
            if (nums1[i1] * nums2[i2] > mid) {
                i1++;
            } else {
                count += n1 - i1;
                i2++;
            }
        }
        
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log(left);
    return left;
};

kthSmallestProduct([2,5],[3,4],2);
kthSmallestProduct([-4,-2,0,3],[2,4],6);
kthSmallestProduct([-2,-1,0,1,2],[-3,-1,2,4,5],3);
