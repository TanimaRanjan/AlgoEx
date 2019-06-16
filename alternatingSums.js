/* 
Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

Example

For a = [50, 60, 60, 45, 70], the output should be alternatingSums(a) = [180, 105].*./
*/ 
const alternatingSums = (array) => {
    
    let sum1 = 0, sum2 =0, count=0
    console.time()
    for(i=0;i<array.length;i=i+2) {
        count++;
        sum1 += array[i]
        if(i+1 !== array.length) {  sum2 += array[i+1] }
    }
    console.timeEnd()
    console.log(count)
    count = 0
    console.time()
    let even = 0, odd = 0
    array.forEach((element, index) => {
        if(index % 2 === 0) {
            even += element
        } else {
            odd += element
        }
        count++
    })
    console.timeEnd()
    console.log(count)

  //  return [even, odd]
}

console.log(alternatingSums([50, 60, 60, 45, 70, 20, 10, 10, 10]))