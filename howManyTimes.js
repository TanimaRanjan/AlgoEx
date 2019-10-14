/*
howManyTimes(5) ➞ "Edaaaaabit"
howManyTimes(0) ➞ "Edbit"
howManyTimes(12) ➞ "Edaaaaaaaaaaaabit"
*/

function howManyTimes(num) {
    
    console.log('Ed' + 'a'.repeat(num) + 'bit')
    return 'Ed' + 'a'.repeat(num) + 'bit'
}


howManyTimes(5) //➞ "Edaaaaabit"
howManyTimes(0) //➞ "Edbit"
howManyTimes(12)// ➞ "Edaaaaaaaaaaaabit"