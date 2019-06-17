/* 
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example

For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, 
the output should be arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].
*/

const arrayReplace = (inputArray, elemToReplace, substitutionElem) => {

    inputArray.forEach((element, index) => {
        if(element === elemToReplace) {
            inputArray[index] = substitutionElem
        }
    })

  

    return inputArray
}

console.log(arrayReplace([1,2,1, 5,7,1,3,5,6,1,2,4,1,1,1,1,1], 1, 3))


