/* Selections sort */ 

function selectionSort(array) {
    var min, swap
    var len = array.length
    for(var i =0; i< len; i++ ) {
        min =i 

        for(var j =i+1 ; j < len; j++) {
            if(less(array[j], array[min])) {
                min = j
            }
        }

        // Swap min with i
        swap = array[i]
        array[i] = array[min] 
        array[min] = swap

    }

    return array

}

function less(a, b) {
    return a <= b 
}



console.log(selectionSort([7,10,5,3,8,4,2,9,6]))

console.log(selectionSort(['s','o','r','t','e','x','a','m','p','l','e']))

