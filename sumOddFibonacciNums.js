/* 

Given a positive integer num, return the sum of all odd 
Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence
 is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal 
to 10 are 1, 1, 3, and 5.

Example

sumOddFibonacciNums(10) should return 10
sumOddFibonacciNums(1000) should return 1785
sumOddFibonacciNums(4000000) should return 4613732
*/

const sumOddFibonacciNums = (num)  => {
    let fibNum = [1, 1];
    let i = 1;
    let sum = 2; 
     while(sum < num) {
        fibNum.push(fibNum[i] + fibNum[i-1]);
        i++;
        if(fibNum[fibNum.length-1] % 2 !== 0) {
            sum += fibNum[fibNum.length-1];
        }
    }

    return sum;
 

}

console.log(sumOddFibonacciNums(10)) ; //should return 10
console.log(sumOddFibonacciNums(1000)) ;// should return 1785
console.log(sumOddFibonacciNums(4000000)) ; //should return 4613732