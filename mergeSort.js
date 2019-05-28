/* Merge Sort */ 


function mergeSort(array) {

  if(array.length < 2) return array;
  var middleIndex = Math.floor(array.length/2);
  var array1 = array.slice(0,middleIndex);
  var array2 = array.slice(middleIndex);

  console.log("MergeSort 1 " + array1)
  console.log("MergeSort 2 " + array2)
  return(merge(mergeSort(array1), mergeSort(array2)));

}


function merge(array1, array2) {
  var result = []
  var minEle = 0

  console.log("Merge 1 " +array1)
  console.log("Merge 2 " +array2)
  while(array1.length && array2.length) {
    if(array1[0] < array2[0]) {
      minEle = array1.shift()
    } else {
      minEle = array2.shift()
    }
    result.push(minEle)
  }

  if(array1.length) result = result.concat(array1)
  else result = result.concat(array2)

  console.log(result)
  return result
}

mergeSort([6000,34,203,3,746,200,984,198,764,1,9,1]);

