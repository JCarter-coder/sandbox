var compareVersion = function(version1, version2) {
    // if version1 < verstion2, return -1
    // if version1 > version2, return 1
    // otherwise return 0;
    let array1 = version1.split('.');
    let array2 = version2.split('.');

    while (array1.length > array2.length) {
        array2.push('0');
    }
    
    while (array2.length > array1.length) {
        array1.push('0');
    }

    let index = 0;

    while (array1[index] || array2[index]) {
        // remove leading zeros and evaluate versions
        if (parseInt(array1[index]) > parseInt(array2[index])) {
            console.log('1');
            return 1;
        } else if (parseInt(array1[index]) < parseInt(array2[index])) {
            console.log('-1');
            return -1;
        } 
        index++;
    }

    console.log('0');
    return 0;
};

compareVersion("1.01","1.001");
compareVersion("1.0","1.0.0");
compareVersion("0.1","1.1");
compareVersion("1.0.1","1");
compareVersion("1.2","1.10");
