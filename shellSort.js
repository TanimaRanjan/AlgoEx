/* Shell Sort */


function shellSort(array, h) {

    var len = array.length
    var swap, count =0

    var hinc = 0
    console.log(h[hinc+2])
    
    while(hinc<h.length) {
    
    for(var i=0; i<len;i++ ) {

        for(var j=i; j>0; j=j-h[hinc]) {
            count++
            console.log(array, i, j, h[hinc], count)
            if(array[j] < array[j-h[hinc]]) {
                console.log("swapping")
                swap = array[j]
                array[j] = array[j-h[hinc]]
                array[j-h[hinc]] = swap   
                 if(count===40) {
                     console.log("returning")
                    return array
                 } 
            } else { 
                break
            }
            
            
        }
        //hinc++
    }
    hinc++
} 
    return array
}


console.log(shellSort(['s','o','r','t','e','x','a','m','p','l','e'], [7,3,1]))