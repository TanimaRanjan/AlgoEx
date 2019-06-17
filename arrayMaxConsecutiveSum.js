/* 
For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be arrayMaxConsecutiveSum(inputArray, k) = 8. All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8
*/

const arrayMaxConsecutiveSum = (inputArray, k) => {

    let maxSum = 0
    for(i=0;i<=inputArray.length-k;i++) {
        let sum =0
        for(j=0;j<k;j++) {
            console.log(inputArray[i+j]) 
            sum += inputArray[i+j]
        }
        console.log(`Sum - ${sum}   MaxSum - ${maxSum}`)
        if(maxSum < sum) {
            maxSum = sum
        } 
    }
    return maxSum
}

console.log(arrayMaxConsecutiveSum(inputArray = [2,3,5,1,6,1,3,4,5,6,7,8,9] , k = 4))