/*
I             1
IV            4
V             5
IX            9
X             10
XL            40
L             50
XC            90
C             100
CD            400
D             500
CM            900 
M             1000 

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

*/



const romanLetters = (r) => {
    
    let rVal = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }

    let rArr = r.split('')
    let value = rVal[rArr[rArr.length-1]]
    for(let i=rArr.length-1; i>0;i--) {
        j = i-1
        let temp = rVal[rArr[j]]
        if(temp < rVal[rArr[i]]) {

            value = value - temp
        }
         else {
            value = value + temp
        }

    }
    console.log('value ',value)
}

romanLetters('III')
romanLetters('IV')
romanLetters('LVIII')
romanLetters('MCMXCIV')