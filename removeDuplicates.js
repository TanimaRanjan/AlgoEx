
// /* Remove duplicates from input array */ 

// function removeDuplicates(array) {

//     console.log("Remove duplicates from array - ")
//     var arr1 = [];
//     var arrList = {};
//     array.forEach(num => {
//         if (!arrList[num]) {
//             arr1.push(num);
//             arrList[num] = true;
//         }
//     });
//     console.log(arr1);
// }




var removeDuplicates = function(nums) {
    
    let result = []
    let hash = {}
    
    nums.forEach(num => {
        if(!hash[num]) {
            result.push(num)
            hash[num] = true
         //   console.log(hash, result)
        }
    });
    return result
};


console.log(removeDuplicates([1,3,3,3,1,5,6,7,8,1]));


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    nums.splice(0, nums.length, ...(new Set(nums)))

}


