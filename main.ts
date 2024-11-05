function minChanges(s: string): number {
    let minChangesRequired: number = 0;
    for (let i = 0; i < s.length; i += 2) {
        if (s.charAt(i) != s.charAt(i + 1)) minChangesRequired++;
    }
    console.log(minChangesRequired);
    return minChangesRequired;
};

minChanges("1001");
minChanges("10");
minChanges("0000");
