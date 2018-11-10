function caesarCipher(strOrig, num) {
    num = num % 26;
    console.log(num);
    str = strOrig.toLowerCase();
    var j;
    var validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
    strArr = str.split('');
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        var curChar = str[i];
        if (curChar === ' ') {
            newStr = newStr + curChar;
            continue;
        } else {
            //newstr = newstr+ String.fromCharCode(curChar.charCodeAt() + num);
            var curInx = validChar.indexOf(curChar);
            var newInx = curInx + num;
            if (newInx > 25) newInx = newInx - 26;
            if (newInx < 0) newInx = newInx + 26;
            if (strOrig[i] === strOrig[i].toUpperCase()) {
                newStr += validChar[newInx].toUpperCase();
            } else {
                newStr = newStr + validChar[newInx];
            }
        }

    }
    console.log(newStr);

}


