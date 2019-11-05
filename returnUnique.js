function returnUnique(arr) {
    let hash = {}
  let final = []
  arr.forEach((num) => {
      if(!hash[num]) hash[num]=0
      hash[num]++
  })
   arr.forEach((num) => {
      if(hash[num] === 1) {
          final.push( num)
      }
  })
   return final
}


function returnUnique1(arr) {
	return arr.filter(x => arr.filter(y => y === x).length == 1)
}
console.log(returnUnique1([1, 9, 8, 8, 7, 6, 1, 6]))
// ➞ [9, 7]

//returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) 
// //➞ [2, 1]

//returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) 
// //➞ [5, 6]
