const binary_search = function(arr, key) {
  let start = 0
  let end = arr.length-1
  let isAsc = arr[start] < arr[end]
  while(start <= end) {
    let mid = Math.floor(start + (end - start)/2)

    if(arr[mid] === key) {
       return mid
    }

    if(arr[mid] > key) {
      if(isAsc) {
        end = mid - 1 
      } else {
        start = mid + 1
      }
     
    }
    if(arr[mid] < key) {
       if(isAsc) {
        start = mid + 1
      } else {
        end = mid - 1   
      }
    }
  }
 
    return -1;
};

console.log(binary_search([4, 6, 10], 10))
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
console.log(binary_search([10, 6, 4], 10))
console.log(binary_search([10, 6, 4], 4))
