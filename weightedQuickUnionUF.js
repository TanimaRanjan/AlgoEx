
id = []
sz = []
function weightedQuickUnionUF(n, arrayUnion, arrayConnected) {

        // Initialize 
        for(i=0;i<n;i++) {
            id[i] = i;
            sz[i] = 1;
        }
        console.log(arrayUnion)
        for(k=0; k<arrayUnion.length; k++) {
          //  console.log(k)
          // console.log(arrayUnion[k][0], arrayUnion[k][1])       
            union(arrayUnion[k][0], arrayUnion[k][1])
        }

        console.log("After Union " )
        for(i=0;i<n;i++) {
            console.log(i + " " + id[i] + " " + sz[i] )
        }

         /* checking if the 2 numbers are connected */ 
      for (i=0;i<arrayConnected.length;i++) {
        console.log(find(arrayConnected[i][0], arrayConnected[i][1]))
    }

}

function union(p, q) {
    i = root(p)
    j = root(q)
    console.log("root "+ p + " -  " + i +  " " + q + " -  " + j  )

    console.log("size "+ p + " -  " + sz[p] +  " " + q + " -  " + sz[q] )

    if (i === j) return ; 
    if (sz[i] < sz[j]) {
        id[i] = j
        sz[j] += sz[i]
    } else {
        id[j] = i
        sz[i] += sz[j]
    }
    console.log("root "+ p + " -  " + id[i] +  " " + q + " -  " + id[j]  )

    console.log("size "+ p + " -  " + sz[p] +  " " + q + " -  " + sz[q] )

}

function root(p) {
    while(id[p] != p) {
        p = id[p]
    }
    return p
}

function find (p, q) {
    return root(p) === root(q)
}


weightedQuickUnionUF(10, [[4,3], [3,8], [5,6], [9,4], [2,1],  [5,0],  [7,2],  [6,1] ],  [[5,0], [3,2], [3,9]])
