/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    
    let fib = [0,1,1]
    for(let i=3;i<=n;i++) {
        fib[i] = fib[i-1] + fib[i-2] + fib[i-3]
    }
    
    console.log(fib)
    return fib[n]
};

tribonacci(25)