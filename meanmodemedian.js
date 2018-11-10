
function getMean(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(array.sort());

    console.log(Math.floor(sum / (array.length)));
}

function getMedian(array) {

    array = array.sort();
    if (array.length % 2 !== 0) {
        var median = array[Math.floor(array.length / 2)];
    } else {
        var mid1 = array[Math.floor(array.length / 2) - 1];
        var mid2 = array[Math.floor(array.length / 2)];
        median = (mid1 + mid2) / 2;
    }
    console.log(median);
}

function getMode(array) {
    arrCnt = {};
    array.forEach(num => {
        if (!arrCnt[num]) arrCnt[num] = 0;
        arrCnt[num]++;
    });
    var maxFreq = 0;
    var mode = 0;
    for (var num in arrCnt) {
        if (arrCnt[num] > maxFreq) {
            mode = [num];
            maxFreq = arrCnt[num];
        }
    }
    //console.log(arrCnt);
}

function getMMM(array) {
    var mean = getMean(array);
    var med = getMedian(array);
    var mode = getMode(array);

}