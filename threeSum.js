
/* Find a triple that sum to a given value 
Given an array and a value, find if there is a triplet in array whose sum is equal to the give value. 
If there is such a triplet present in array, then print the triplet and return true. Else return false. 
*/ 

function threeSum(array, key) {
    var i, j, k
    console.log(`Find triplet in ${array} that sums to ${key}`)
    for(i = 0; i< array.length - 2 ; i++) 
    {
        for(j = i + 1; j < array.length - 1; j++)  
        {
            for(k = j + 1; k < array.length ; k++)  
            {
                if(array[i] + array[j] + array[k] === key) {
                    console.log(`Sum of ${array[i]} ${array[j]} and ${array[k]} matches ${key}`)
                    return true
                }
            }
        }
    }
}

threeSum([12,3,4,1,6,9], 24)

