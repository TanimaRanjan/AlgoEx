/*Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

*/
const adjacentElementsProduct = (array) => {
    let product = 0

    array.reduce((num1, num2) => {
        if(product < (num1*num2)) {
            product=num1*num2
        } 
        return num2
    })
    return product
}

console.log(adjacentElementsProduct([3, 6, 7, 3, -2, 5, 7, 3]))