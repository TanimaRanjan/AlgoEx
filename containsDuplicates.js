/*
Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return true if any element appears at least twice in the array, and it should return false if every element is distinct.

Example

For a = [1, 2, 3, 1], the output should be containsDuplicates(a) = true.
There are two 1s in the given array.

For a = [3, 1], the output should be containsDuplicates(a) = false.
The given array contains no duplicates.
*/
const containsDuplicates = (array) => {

    let arrStr = {}
    let arr = []
    let result = false
    array.forEach( num => {
      //  console.log(arrStr[num], num)
        if(!arrStr[num]) { 
            arr.push(num)
            arrStr[num] =0
        } 
        arrStr[num]++
    })
    console.log(arrStr)
    
}


console.log(containsDuplicates([1,2,3,1]))
console.log(containsDuplicates([1,2,3]))