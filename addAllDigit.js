const addAllDigit = (number) => {
    // let sum = 0
    // number.toString().split('').forEach(num =>  sum += parseInt(num) )

    return number.toString().split('').reduce((a, b) => {
        return parseInt(a) + parseInt(b)
    })
    // return sum
}

console.log(addAllDigit(23))
console.log(addAllDigit(235))
console.log(addAllDigit(123))
console.log(addAllDigit(12345))
console.log(addAllDigit(9999999999))