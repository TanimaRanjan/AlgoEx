// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.


function pigIt(string) {
    console.log(`Pig Latin it ${string}`);
    var stringArr = string.split(' ');
    var strTemp = '';
    var finalString = '';
    for (var i = 0; i < stringArr.length; i++) {
        strTemp = '';
        //strTemp = stringArr[i].substr(1, stringArr[i].length-1) + stringArr[i][0] + 'ay';
        strTemp = stringArr[i].slice(1).concat(stringArr[i][0].concat('ay'));
        finalString = finalString + strTemp + ' ';
    }
    return finalString;

}


console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldWay !
