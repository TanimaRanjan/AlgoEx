function triplet_with_smaller_sum(arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;
  for (i = 0; i < arr.length - 2; i++) {
    count += search_pair(arr, target - arr[i], i);
    console.log('count ', count)
  }
  return count;
}


function search_pair(arr, target_sum, first) {
  let count = 0;
  let left = first + 1,
    right = arr.length - 1;
    console.log(arr, target_sum, first)
  while (left < right) {

    if (arr[left] + arr[right] < target_sum) { // found the triplet
      // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
      // left and right to get a sum less than the target sum
      console.log(left, right, count)
      count += right - left;
      left += 1;    
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
  return count;
}


console.log(triplet_with_smaller_sum([7, 3, 2, 10,0], 13));
//console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));