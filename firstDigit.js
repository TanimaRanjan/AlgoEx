/* Find the leftmost digit that occurs in a given string.

Example

For inputString = "var_1__Int", the output should be firstDigit(inputString) = '1';

For inputString = "q2q-q", the output should be firstDigit(inputString) = '2';

For inputString = "0ss", the output should be firstDigit(inputString) = '0'.
*/

const firstDigit = (string) => {

    let numArray = ['1','2','3','4','5','6','7','8','9','0'];
    let array = string.split('');
    

    for(let i=0;i<array.length;i++) {
        if(numArray.includes(array[i])) {
            return array[i];
        }
    }
    
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));