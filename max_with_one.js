
function max_with_one(arr,k) {
    let windowEnd = 0
    let windowStart=0
    let hash = {}
    let maxLen = 0
    let maxOne = 0

    for(windowEnd=0;windowEnd<arr.length;windowEnd++) {
        if(!hash[arr[windowEnd]]) hash[arr[windowEnd]]=0
        hash[arr[windowEnd]]++

        if(hash['1']) {
            maxOne = Math.max(maxOne, hash['1'])
        }
        
        if((windowEnd - windowStart + 1 - maxOne) > k) {
            hash[arr[windowStart]]--
            if(hash[arr[windowStart]] ==0 ) delete hash[arr[windowStart]]
            windowStart++
        }

        maxLen = Math.max(maxLen, windowEnd - windowStart + 1)
    }

    console.log(maxLen)
    return maxLen
}


//max_with_one([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)