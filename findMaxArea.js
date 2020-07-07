const findMaxArea = (array) => {

    let maxArea = 0
    let left = 0
    let right = array.length-1

    while(left < right) {
        maxArea = Math.max(maxArea, ((right-left) * Math.min(array[left], array[right])))
        if(array[left] < array[right]) {
            left++
        } else {
            right--
        }
    }

    return maxArea
}

console.log(findMaxArea([1,8,6,2,5,4,8,3,7]))