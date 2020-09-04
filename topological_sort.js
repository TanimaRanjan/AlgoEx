const topological_sort = function(vertices, edges) {
  sortedOrder = [];
  
    if(vertices==0) {
        return sortedOrder
    }

    const inDegree = Array(vertices).fill(0)
    const graph = Array(vertices).fill(0).map(() => Array())

    edges.forEach(edge => {
        let parent = edge[0]
        let child = edge[1]
        graph[parent].push(child)
        inDegree[child]++
    });

    let source = []
    for(let i=0;i<inDegree.length;i++)     {
        if(inDegree[i] ===0) {
            source.push(i)
        }
    }

    while(source.length > 0) {
        let vertex = source.shift()
        sortedOrder.push(vertex)

        graph[vertex].forEach(v => {
            inDegree[v] -=1
            if(inDegree[v] ==0 ) {
                source.push(v)
            }
        })
    }

//    console.log('Graph ', graph)
//    console.log('In Degree ', inDegree)
//    console.log('source ', source)
    //console.log('sorted List ', sortedOrder)
    return sortedOrder
};


console.log(`Topological sort: ${topological_sort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])}`)
console.log(`Topological sort: ${topological_sort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])}`)
console.log(`Topological sort: ${topological_sort(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]])}`)
