const smallest_subarray_with_given_sum = function(s=7, arr=[2, 1, 5, 2, 3, 2]) {
  // TODO: Write your code here
  let start = 0
  let sum = 0
  let end = 0
  let minLen = Infinity
  for(end=0;end<arr.length;end++) {
      sum += arr[end]
      while(sum >= s) {
        
        minLen = Math.min(minLen, end-start+1)
        console.log(minLen)
        sum -= arr[start]
        start ++
      }
    }

    if(minLen == Infinity) {
      return 0
    }  

  return minLen;
};

smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])