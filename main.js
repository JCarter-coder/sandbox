var compareVersion = function(version1, version2) {
    // if version1 < verstion2, return -1
    // if version1 > version2, return 1
    // otherwise return 0;
    let array1 = version1.split('.');
    let array2 = version2.split('.');

    let n1 = array1.length;
    let n2 = array2.length;

    for (let i = 0; i < Math.max(n1, n2); i++) {
        // remove leading zeros and evaluate versions
        let i1 = i < n1 ? parseInt(array1[i]) : 0;
        let i2 = i < n2 ? parseInt(array2[i]) : 0;

        if (i1 != i2) {
            console.log(i1 > i2 ? 1 : -1);
            return i1 > i2 ? 1 : -1;
        }
    }

    console.log(0);
    return 0;
};

compareVersion("1.01","1.001");
compareVersion("1.0","1.0.0");
compareVersion("0.1","1.1");
compareVersion("1.0.1","1");
compareVersion("1.2","1.10");
