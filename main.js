var numTeams = function(rating) {
    let N = rating.length;
    let teams = 0;
    
    for (let mid = 0; mid < N; mid++) {
        let leftSmaller = 0;
        let rightLarger = 0;

        for (let left = mid - 1; left >= 0; left--) {
            if (rating[left] < rating[mid]) leftSmaller++;
        }

        for (let right = mid + 1; right < N; right++) {
            if (rating[right] > rating[mid]) rightLarger++;
        }

        teams += leftSmaller * rightLarger;

        let leftLarger = mid - leftSmaller;
        let rightSmaller = N - mid - 1 - rightLarger;

        teams += leftLarger * rightSmaller;
    }

    console.log(teams);
};

numTeams([2,5,3,4,1]);
numTeams([2,1,3]);
numTeams([1,2,3,4]);
