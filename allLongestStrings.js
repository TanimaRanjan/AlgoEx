/*Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/
const allLongestStrings = (array) => {

    let newArray = []
    let len = 0
    array.forEach((ele) => {
        len = len <ele.length ? ele.length : len
    })
    array.forEach((ele) => {
        if(ele.length === len) {
            newArray.push(ele)
        }
    })
    

    return newArray

}

console.log(allLongestStrings( ["aba", "aa", "ad", "vcd", "aba"]))