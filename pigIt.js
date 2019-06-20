/*
 Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.
*/


function pigIt(string) {
    console.log(`Pig Latin it ${string}`);
    var stringArr = string.split(' ');
    var strTemp = '';
    var finalString = '';
    var vowelReg = /[aeiou]/
    for (var i = 0; i < stringArr.length; i++) {
        strTemp = '';
        if(vowelReg.test(stringArr[i][0])) {
            strTemp = `${stringArr[i]}way`
        } else { 
            strTemp = `${stringArr[i].slice(1)}${stringArr[i][0]}ay`
        }
        finalString += strTemp + ' ';

    }
    return finalString;

}


console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay

console.log(pigIt('Hello world !')); // elloHay orldWay !
