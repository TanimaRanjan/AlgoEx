/* Shuffle */ 


function shuffle(array) {

    var len = array.length
    var r = 0 , swap
    for(var i=0; i<len; i++) {
        r = Math.floor(Math.random(0,i)*len)
        console.log(r, array[r], i)
        swap = array[i]
        array[i] = array[r]
        array[r] = swap

    }
    return array
}


console.log(shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))