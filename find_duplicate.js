const find_duplicate = function(nums) {
  let i=0
  while(i<nums.length) {
    let item = nums[i]-1
   // console.log(nums, item)
    if(item>=0  && item < nums.length && nums[item] !== nums[i]) {
      [nums[item], nums[i]] = [nums[i], nums[item]]
    } else {
         i++
    }
   // i++
  }

// console.log(nums)
  let res = []
  for(let i=0;i<nums.length;i++) {
    if(nums[i]-1 !== i) {
      res.push(i+1)
    }
  }

  return res;
};

console.log(find_duplicate([-3,1,5,4,2],3))
console.log(find_duplicate([3, -2, 0, 1, 2],3))
console.log(find_duplicate([ 3, 2, 5, 1 ],3))
console.log(find_duplicate([3, -1, 4, 5, 5],3))
console.log(find_duplicate([2, 3, 4],3))
console.log(find_duplicate([-2, -3, 4],3))
