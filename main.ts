function takeCharacters(s: string, k: number): number {
    const count: number[] = new Array(3).fill(0);
    let N = s.length;

    for (let c of s.split('')) {
        count[c.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < 3; i++) {
        if (count[i] < k) {
            console.log(-1);
            return -1;
        }
    }

    const window: number[] = new Array(3).fill(0);
    let left: number = 0;
    let maxWindow: number = 0;

    for (let right = 0; right < N; right++) {
        window[s.charCodeAt(right) - 97]++;

        while (
            left <= right &&
            (
                count[0] - window[0] < k ||
                count[1] - window[1] < k ||
                count[2] - window[2] < k
            )
        ) {
            window[s.charCodeAt(left) - 97]--;
            left++;
        }

        maxWindow = Math.max(maxWindow, right - left + 1);
    }

    console.log(N - maxWindow);
    return N - maxWindow;
};

takeCharacters("aabaaaacaabc",2);
takeCharacters("a",1);
