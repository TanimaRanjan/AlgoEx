
const averageOfSubArray = (arr,k) => {

    let windowStart = 0
    let windowEnd = 0
    let sum = 0
    let result = []

    for(windowEnd=0;windowEnd<arr.length;windowEnd++) {

        sum += arr[windowEnd]

        if(windowEnd >= k-1) {
            result[windowStart] = sum/k
            sum -= arr[windowStart]
            windowStart++
        }

    }

    return result

}

console.log(averageOfSubArray([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))