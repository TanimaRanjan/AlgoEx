function removeDupFromString(string) {
    string = string.toLowerCase();
    var strArr = string.split('');
    var strArrList = {};
    strArr.forEach(char => {
        if (!strArrList[char]) strArrList[char] = 0;
        strArrList[char]++;
    });

    console.log(strArrList);
    var newString = '';
    for (var j in strArrList) {
        // if(strArrList[j]==1)  -- If to remove removeDuplicates
        // Dont use if you are trying to only put all char once.
        newString += j;
    }
    console.log(newString);
}
