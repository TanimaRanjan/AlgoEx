/* 
    Quick Find (Eager Algorithm)
*/

id=[]
function quickFind(n, arrayUnion, arrayConnected) {
    
    
    /* Initialization */ 
    for (i =0;i<n;i++) {
        id[i] = i
    }
   
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
    
    console.log(connected(arrayConnected[0], arrayConnected[1]))
}


function connected(p,q) {
    console.log(p, q, id[p], id[q])
    if(id[p] == id[q]) {
        return true
    } else {
        return false
    }
}

quickFind(10, [[4,3],
    [3,8],
    [5,6], 
    [9,4],
    [2,1]
   ], 
   [3,9])

/* 
Input 
N = 10
[[4,3],
 [3,8],
 [6,5], 
 [9,4],
 [2,1]
], 
[3,9]
*/