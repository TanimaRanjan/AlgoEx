/* 
    Quick Union (Lazy Algorithm )
*/

id =[]
function quickUnion(n, arrayUnion, arrayConnected) {

    /* Initialization */ 
    for (i =0;i<n;i++) {
        id[i] = i
    }

       /* Union */ 
       for(i=0;i<arrayUnion.length;i++) {
        console.log(arrayUnion[i][0], arrayUnion[i][1])
        p = arrayUnion[i][0]
        q = arrayUnion[i][1]
        id[p] = id[q]
    }

    console.log("After Union " )
    for(i=0;i<n;i++) {
        console.log(i + " " + id[i] )
    }

      /* checking if the 2 numbers are connected */ 
      for (i=0;i<arrayConnected.length;i++) {
        console.log(connected(arrayConnected[i][0], arrayConnected[i][1]))
    }
}

function root(p) {
    while(id[p] != p) {
        p = id[p]
    }
    return p
}

function connected(p, q) {
    console.log(root(p), root(q))
    if(root(p) == root(q)) {
        return true 
    } else {
        return false
    }
}

quickUnion(10, [[4,3], [3,8], [5,6],  [9,4], [2,1],  [5,0],  [7,2],  [6,1] ],  [[5,0], [3,2], [3,9]])