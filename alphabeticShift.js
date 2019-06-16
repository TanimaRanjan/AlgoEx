/* Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

Example

For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".
*/ 

const alphabeticShift = (word) => {
    let arr = word.split('')

    arr.forEach((ele, index) => {
        if(arr[index]==='z' ) {
            arr[index] = 'a'
        } else {
            arr[index] = String.fromCharCode((ele.charCodeAt()+1)) 
        }
        
    })
    return arr.join('')
}

console.log(alphabeticShift('crazy'))
console.log(alphabeticShift('acbdefghijklmnopqrstuvwxyz'))