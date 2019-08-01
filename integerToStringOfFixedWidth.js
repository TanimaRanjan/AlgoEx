/* 
Given a positive integer number and a certain length, we need to modify the given number to have a specified length. 
We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.
Example
For number = 1234 and width = 2, the output should be integerToStringOfFixedWidth(number, width) = "34";
For number = 1234 and width = 4, the output should be integerToStringOfFixedWidth(number, width) = "1234";
For number = 1234 and width = 5, the output should be integerToStringOfFixedWidth(number, width) = "01234".*/


const integerToStringOfFixedWidth = (number, width) => {

    // console.log(number.toString().length)
    // console.log(width)
    let numLen = number.toString().length;
    let numString = number.toString();
    let str = "";
    if(width <= numLen) {
        return numString.substring(numLen-width,numLen);
    } else {
        for(let i=0;i<width-numLen;i++) {
            str += "0";
        }
        return str.concat(numString);
    }
    
}

console.log(integerToStringOfFixedWidth(12345678, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 6));