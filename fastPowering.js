//Fast Powering Algorithm.

function fastPowering(base, power) {

    if(power === 0) {
        // Any number to be power 0 is 1
        return 1
    } 
    if(power % 2 === 0) {
        const multiplier = fastPowering(base, power/2)
        return multiplier * multiplier
    }
    else {
        const multiplier = fastPowering(base, Math.floor(power/2))
        return multiplier * multiplier * base 
    }
    
}


console.log(fastPowering(1, 1))
console.log(fastPowering(2, 0))
console.log(fastPowering(2, 2))
console.log(fastPowering(2, 3))
console.log(fastPowering(2, 4))
console.log(fastPowering(2, 5))
console.log(fastPowering(2, 6))
console.log(fastPowering(2, 7))
console.log(fastPowering(2, 8))
console.log(fastPowering(3, 4))
console.log(fastPowering(190, 2))
console.log(fastPowering(11, 5))