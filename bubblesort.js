/* Bubble Sort */
/*
Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, 
compares each pair of adjacent items and swaps them if they are in the wrong order. 
The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. 
*/

function bubblesort(array) {
  console.log(`Before Sorting ${array}`);
  var temp=0;
  for(var i=array.length;i>0;i--) {
    for(var j=0;j<i;j++) {
        if(array[j] > array[j+1]) {
          temp = array[j+1];
          array[j+1] = array[j];
          array[j] = temp;
      }
    }
  }
  console.log(`After Sorting ${array}`);
}

bubblesort([5,3,8,2,1,4,9,7,1]);