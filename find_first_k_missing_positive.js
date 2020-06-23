const find_first_k_missing_positive = function(nums, k) {
  missingNumbers = [];
  let i=0
  let n = nums.length
  while(i<n) {
    temp = nums[i]-1
    if(temp > 0 && temp<n && nums[temp] !== nums[i]) {
      [nums[temp], nums[i]] = [nums[i], nums[temp]]
    } else {
      i++
    }
  }
  console.log(nums)
  let allNumber = new Set()
  for(let i=0;i<n;i++) {
      if(missingNumbers.length < k) {
          if(nums[i] !== i+1) {
              missingNumbers.push(i+1)
              allNumber.add(nums[i])
          }
      }
  }

  while(missingNumbers.length < k) {
    let next = n+1
    if(!allNumber.has(next)) {
        missingNumbers.push(next)
    }
    n++
  }


  console.log(missingNumbers)
  
  return missingNumbers;
};


find_first_k_missing_positive([3,-1,4,5,5], 3)
