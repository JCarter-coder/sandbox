var countSeniors = function(details) {
    let result = 0;
    for (let i = 0; i < details.length; i++) {
        let age = details[i].slice(11,13);
        if (parseInt(age) > 60) result++;
    }
    console.log(result);
};

countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"]);
countSeniors(["1313579440F2036","2921522980M5644"]);
countSeniors(["9751302862F0693","3888560693F7262","5485983835F0649","2580974299F6042","9976672161M6561","0234451011F8013","4294552179O6482"]);
