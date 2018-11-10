function reverseArr(arr) {

  console.log(arr);
  for(i=0;i<arr.length/2;i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length -1 -i];
    arr[arr.length -1 -i] = temp;
  }
    
  console.log(arr);
}