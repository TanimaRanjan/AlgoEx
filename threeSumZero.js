
/* Find a triple that sum to zero
Given an array and a value, find if there is a triplet in array whose sum is equal to the give value. 
If there is such a triplet present in array, then print the triplet and return true. Else return false. 
*/ 

function threeSumZero(array) {
    var i, j, k
    console.log(`Find triplet in ${array} that sums to 0`)
    for(i = 0; i< array.length - 2 ; i++) 
    {
        for(j = i + 1; j < array.length - 1; j++)  
        {
            for(k = j + 1; k < array.length ; k++)  
            {
                if(array[i] + array[j] + array[k] === 0) {
                    console.log(`Sum of ${array[i]} ${array[j]} and ${array[k]} is zero`)
                    return true
                }
            }
        }
    }
}

threeSumZero([12,-3,4,1,-1,9])
