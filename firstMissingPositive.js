var firstMissingPositive = function(nums) {
    
    let min = 0
    let max = Math.max(...nums)
    let count=1
    for(let i=0;i<nums.length;i++) {

        if(count>=min && count<=max) {
            
            count++
            if(!nums.includes(count) && count > 0 ) {
                console.log('---', count, !nums.includes(count))
                return count
            }
        }  
        
        
    }
    count++
    return count
};

firstMissingPositive([1,2,0])

firstMissingPositive([3,4,-1,1])
//
firstMissingPositive([7,8,9,11,12])

/*
Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
*/