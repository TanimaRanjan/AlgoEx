const find_missing_numbers = function(nums) {
  missingNumbers = [];
  let i=0
  while(i<nums.length) {
    let item = nums[i]-1
    console.log(nums)
    if(item !== i) {
      [nums[item], nums[i]]=[nums[i], nums[item]]
    } else {
      i++
    }
  }
  
  for(i=0;i<nums.length;i++) {
    if(nums[i] !== i+1) {
      missingNumbers.push(i+1)
    }
  }
  console.log(missingNumbers)
  return missingNumbers;
};


find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1])