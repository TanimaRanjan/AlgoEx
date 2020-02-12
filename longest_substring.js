
function longest_substring(str, k) {

    let windowEnd = 0
    let windowStart=0
    let hash= {}
    let maxLen = 0
    let maxRepeatCount = 0

    for(windowEnd=0;windowEnd<str.length;windowEnd++) {

        if(!hash[str[windowEnd]]) hash[str[windowEnd]]=0
        hash[str[windowEnd]]++

        maxRepeatCount = Math.max(maxRepeatCount, hash[str[windowStart]])

        if((windowEnd - windowStart + 1 - maxRepeatCount) > k) {
            hash[str[windowStart]]--
            if(hash[str[windowStart]]==0) delete hash[str[windowStart]]
            windowStart++
        }

        maxLen = Math.max(maxLen, windowEnd - windowStart + 1)
    }

    return maxLen

}
