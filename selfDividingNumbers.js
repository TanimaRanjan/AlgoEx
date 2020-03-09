/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    
    let result = []
    for(let n = left; n < right; n++) {
        if(selfDividingNumber(n)) {
            result.push(n)
        }
    }
    return result
};


const selfDividingNumber = function(number) {
    
    let num = number
    let res = 0
    let rem = 0
    while(num > 0) {
        rem = num % 10
        res = number % rem
        if(res !== 0) {
            return false
        }
        num = Math.floor(num/10)
    }
    
    return true
}

console.log(selfDividingNumbers(1,22))