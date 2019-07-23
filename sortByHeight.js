/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. 
Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

Hinits

filter()
sort()
*/

const sortByHeight = (array) => {

    let numArray = []

    numArray = array.filter((element) => {
        if(element !== -1) {
            return element
        }
    }).sort((num1, num2) => num1 - num2)


     array.forEach((element , index) => {
        if(element !== -1) {
            array[index] = numArray.shift()
        } 
    })

    console.log(array)    

}

sortByHeight( [-1, 150, 190, 170, -1, -1, 160, 180])