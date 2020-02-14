const happy_num = (num) => {

    let slow = num
    let fast = num
    while(true) {

        slow = sum_sq(slow)
        fast = sum_sq(sum_sq(fast))
        console.log('slow and fast ',slow , fast)
        if(slow == fast) {
            break
        } 
    }

    return slow === 1
}

const sum_sq = (num) => {

    let rem = 0
    let sum = 0
    while(num > 0) {
        rem = num % 10
        sum += rem**2
        num = Math.floor(num/10)
        console.log(num, sum)
    }


    return sum
}

console.log(happy_num(23))
console.log(happy_num(12))