function jump(nums: number[]): number {
    let answer: number = 0;
    let N: number = nums.length;
    let currEnd: number = 0;
    let currFar: number = 0;

    for (let i = 0; i < N - 1; i++) {
        currFar = Math.max(currFar, i + nums[i]);

        if (i === currEnd) {
            answer++;
            currEnd = currFar;
        }
    }

    console.log(answer);
    return answer;
};

jump([2,3,1,1,4]);
jump([2,3,0,1,4]);
