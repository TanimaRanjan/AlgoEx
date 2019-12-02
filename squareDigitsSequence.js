/* 
Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. 
The sequence ends once an element that has already been in the sequence appears again.

Given the first element a0, find the length of the sequence.

Example

For a0 = 16, the output should be squareDigitsSequence(a0) = 9.

Here's how elements of the sequence are constructed:

a0 = 16
a1 = 1^2 + 6^2 = 37
a2 = 3^2 + 7^2 = 58
a3 = 5^2 + 8^2 = 89
a4 = 8^2 + 9^2 = 145
a5 = 1^2 + 4^2 + 52 = 42
a6 = 4^2 + 2^2 = 20
a7 = 2^2 + 0^2 = 4
a8 = 4^2 = 1^6, which has already occurred before (a0)*/


const squareDigitsSequence = (a0) => {

    let result = 0;
    let count = 1
    let arrayResults = [a0];
    
    while(true) {

        count++;

        a0 = digitPower(a0);

        if(arrayResults.includes(a0)) {
            return count;
        }

        arrayResults.push(a0);

    }
}

const digitPower = (num) => {
    const digits = num.toString().split('').map((ele) => parseInt(ele) ** 2);
    const sum = digits.reduce((a,b) => a+b);
    return sum;
}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));