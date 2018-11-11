function mergeSort(array) {

  if(array.length < 2) return array;
  var middleIndex = Math.floor(array.length/2);
  var array1 = array.slice(0,middleIndex);
  var array2 = array.slice(middleIndex);

  return(merge(mergeSort(array1), mergeSort(array2)));

}

function merge(array1, array2) {
  var result = [];
  var minElem = 0;
  while(array1.length && array2.length) {
    if(array1[0] < array2[0]) {
      minElem = array1.shift();
    } else {
      minElem = array2.shift();
    }
    result.push(minElem);
  }

  if(array1.length) result = result.concat(array1);
  else result = result.concat(array2); 

  return result;
}

mergeSort([6000,34,203,3,746,200,984,198,764,1,9,1]);