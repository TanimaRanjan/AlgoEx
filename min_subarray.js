

const min_subarray = (s,array) => {

    let windowEnd = 0
    let windowStart = 0
    let minLen = Infinity
    let sum = 0

    for(windowEnd =0;windowEnd<array.length;windowEnd++) {

        sum += array[windowEnd]

        while(sum >= s) {
            minLen = Math.min(minLen, windowEnd - windowStart + 1) 
            sum -= array[windowStart]
            windowStart++
        }

    }
    console.log(minLen)
    return minLen == Infinity ? 0 : minLen

}

console.log(min_subarray(7,[2,1,5,2,3,2]))