/* 
Binary Search 
*/ 
function binarySearch(array, key) {
  start = 0, o=0;
  end = array.length-1;
  var median =0;
  var found = false;
  
  //console.log(start + ' ' + end + ' ' + median );
  while(o<array.length && !found) {
    o++; 
    //console.log("o - "+o);
    median =  Math.floor((start + end)/2);
    //console.log(start + ' ' + end + ' ' + median );
    if(key>array[median] && start  != end) {
      start = median;
//      console.log("more = "+array[start] + ' ' +array[end] );
    } else if(key<array[median] && start != end) {
      end = median;
  //    console.log("less= "+array[start] + ' ' +array[end]);
    } else if(key===array[median]) {
    //  console.log("Found It "+array[median] + ' at '+ median);
      start = median;
      end = median;
      found = true;
    }
  }
  if(found) {
      console.log(`Found the ${key} at ${median} in the array ${array}`)
  }  else {
      console.log(`${key} not found in ${array}`)
  }
}

binarySearch([1,2,3,4,5], 2);

binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,20,21,24,25,26,27,28,29,30], 25);

binarySearch([1,2,3,4,5], 7);