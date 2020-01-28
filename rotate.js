 
var rotate = function(nums, k) {
    
    let result = [...nums.splice(nums.length-k), ...nums]
    console.log(result)
    
};    


rotate([1,2,3,4,5,6,7], 3)