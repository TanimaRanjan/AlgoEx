
function max_substring(k, str) {

    let windowEnd = 0
    let windowStart = 0
    let hash = {}
    let maxLen = 0
    
    
    for(windowEnd=0;windowEnd<str.length;windowEnd++) {
        
        if(!hash[str[windowEnd]])  hash[str[windowEnd]]=0
        hash[str[windowEnd]]++
        while(Object.keys(hash).length > k) {
          hash[str[windowStart]]--
          if(hash[str[windowStart]] ==0 ) delete hash[str[windowStart]]
          windowStart++
        }
        
        maxLen = Math.max(maxLen, windowEnd - windowStart + 1)
        
    }
    
    return maxLen 
    
    
  }
  