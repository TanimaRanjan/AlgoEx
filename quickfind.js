/* 
    Quick Find (Eager Algorithm)
*/

id=[]
function quickFind(n, arrayUnion, arrayConnected) {
    
    
    /* Initialization */ 
    for (i =0;i<n;i++) {
        id[i] = i
    }
   
    /* Union */ 
    for(i=0;i<arrayUnion.length;i++) {
        console.log(arrayUnion[i][0], arrayUnion[i][1])
        p = arrayUnion[i][0]
        q = arrayUnion[i][1]
        pid = id[p]
        qid = id[q]
        for (j=0;j<n;j++) {
            if(id[j] == pid) {
                id[j] = qid
            }
        }
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


function connected(p,q) {
    console.log(p, q, id[p], id[q])
    if(id[p] == id[q]) {
        return true
    } else {
        return false
    }
}

quickFind(10, [[4,3], [3,8], [5,6],  [9,4], [2,1],  [5,0],  [7,2],  [6,1] ],  [[5,0], [3,2], [3,9]])
