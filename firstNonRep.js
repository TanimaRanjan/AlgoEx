function firstNonRep(string) {
    string = string.toLowerCase();

    var strArr = string.split('');
    var strArrCnt = {};
    strArr.forEach(char => {
        if (!strArrCnt[char]) strArrCnt[char] = 0;
        strArrCnt[char]++;
    });

    for (var j in strArrCnt) {
        if (strArrCnt[j] === 1) {
            console.log(j);
        }
    }
    console.log(strArrCnt);

}
