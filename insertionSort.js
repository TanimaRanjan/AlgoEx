/* Insertion Sort */

function insertionSort(array) {
    var len = array.length
    var swap, count=0
    for(var i=1;i<len;i++) {

        for (var j=i;j>0;j--) {

                count++
                console.log(array, i, j , count, array[j],  array[j-1])        
               if(array[j] < array[j-1]) {
                    swap = array[j]
                    array[j] = array[j-1]
                    array[j-1] = swap

               } else { break }
        }
        
    }
    return array
}


//console.log(insertionSort([7,10,5,3,8,4,2,9,6]))

console.log(insertionSort(['s','o','r','t','e','x','a','m','p','l','e']))

//console.log(insertionSort(['a','e','e','l','m','o','p','r','s','t','x']))

//console.log(insertionSort(['a','e','e','l','m','o','t','r','x','p','s']))