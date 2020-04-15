const cyclic_sort = function(nums) {
    let i=0
    while(i<nums.length) {
        let element = nums[i]
        console.log(nums, element)
        if(element !== i+1) {
            // swap with the element at element
            [nums[element-1], nums[i]] = [nums[i], nums[element-1]]
        } else {
            i++
        }
    }
    console.log(nums)
  return nums;
}


//console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`)
//console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`)
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`)
