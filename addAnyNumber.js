const add = (...array) => {
    let sum = 0 
    array.forEach((number) => sum +=  number )
  

    let sum2 = array.reduce((a,b) =>  a + b)
    console.log(sum, sum2)
  return sum2
}


console.log(add(2,3))
console.log(add(1,2,3,4,5))
console.log(add(2,3,7,8,9))
