/* 
Check if all digits of the given integer are even.

Example

For n = 248622, the output should be evenDigitsOnly(n) = true;
For n = 642386, the output should be evenDigitsOnly(n) = false. 
*/ 

const evenDigitsOnly = (number) => {

    let arr = (number).toString().split('')

    return arr.every( number => parseInt(number) % 2 === 0)

    // for(i=0;i<arr.length;i++) {
    //     if (arr[i] % 2 !== 0)  {
    //         return false
    //     } 
    // }
}

console.log(evenDigitsOnly(248622))
console.log(evenDigitsOnly(642386))