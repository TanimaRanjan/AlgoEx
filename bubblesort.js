function bubblesort(array) {
  console.log(array);
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
  console.log(array);
}