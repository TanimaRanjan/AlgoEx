function find_single_number(arr) {
  let num = 0;
  for (i = 0; i < arr.length; i++){
      console.log(num, arr[i])
        num ^= arr[i];
        console.log('After ', num)
  }
  return num;
}
  
console.log(find_single_number([1, 4, 2, 1, 3, 2, 3]));