/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(n) {
    
    if(n<=1) return n
    
    for(let i=2;i<=n;i++) {
        if(Math.floor(n/i) === i) {
            return i
        } else if(Math.floor(n/i) < i) {
            return Math.floor(n/i)
        }
    }
};


console.log(mySqrt(0))

console.log(mySqrt(1))

console.log(mySqrt(2))

console.log(mySqrt(4))

console.log(mySqrt(8))