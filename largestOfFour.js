/*
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Example

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) returns [27, 5, 39, 1001];
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) returns [9, 35, 97, 1000000];
*/

const largestOfFour1 = (array) => {

    let result = []
    array.forEach(subArray => {
      //  console.log(subArray)
        let max = 0
        subArray.forEach(num => {
            max = max < num ? num : max
        })
        result.push(max)
    })
    return result
}

const largestOfFour2 = (numbers) => {
    let highestNumbers = []

    for(let numberGroup of numbers) {
        let largest = 0

        for(let number of numberGroup) {
            largest = largest < number ? number : largest
        }
        highestNumbers.push(largest)
    }
    return highestNumbers
}

console.log(largestOfFour1([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
console.log(largestOfFour1([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [4000, 1001, 857, 1]])) 
console.log(largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
console.log(largestOfFour2([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [4000, 1001, 857, 1]]))