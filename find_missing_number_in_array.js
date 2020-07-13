const find_missing_number = function(nums) {
  let i=0
  while(i<nums.length) {
    let item = nums[i]
    console.log(item)
    if(item < nums.length && item != i) {
      [nums[item], nums[i]] = [nums[i], nums[item]]
    } else {
      i++
    }
  }
  console.log(nums)
  for(i=0;i<nums.length;i++) {
    if(nums[i] != i) return nums[i]
  }
  return -1;
};

console.log(find_missing_number([4, 0, 3, 1]))