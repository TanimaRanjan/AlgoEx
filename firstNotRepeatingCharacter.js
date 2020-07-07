/*
Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.

Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be firstNotRepeatingCharacter(s) = 'c'.
There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be firstNotRepeatingCharacter(s) = '_'.
There are no characters in this string that do not repeat. 
*/

const firstNotRepeatingCharacter = (str) => {
    let arr = str.split('')
    let arrStr = {}
    for(i=0;i<arr.length;i++) {
        if(!arrStr[arr[i]]) arrStr[arr[i]] = 0
        arrStr[arr[i]]++
    }

    console.log(arrStr)
    for(num in arrStr) {
        if(arrStr[num] === 1) return num  
    }


    return '_'
}

console.log(firstNotRepeatingCharacter("abacabad"))
console.log(firstNotRepeatingCharacter("aebdacfabaabacdeaba"))
console.log(firstNotRepeatingCharacter("aebdacabaabacdeaba"))