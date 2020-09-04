const is_scheduling_possible = (tasks, prereq) => {
    
    let sorted = [] 
    if(tasks<=0) {
        return false
    }

    let inDeg = Array(tasks).fill(0)
    let graph = Array(tasks).fill(0).map(() => Array())


    prereq.forEach(edge => {
        let parent = edge[0]
        let child = edge[1]
        graph[parent].push(child)
        inDeg[child]++
    });

    let source=[]

    for(let i=0;i<inDeg.length;i++) {
        if(inDeg[i] ===0) {
            source.push(i)
        }
    }

    while(source.length > 0) {
        let vertex = source.shift()
        sorted.push(vertex)

        graph[vertex].forEach(child => {
            inDeg[child]--
            if(inDeg[child]===0) {
                source.push(child)
            }
        })
    }

    
    if(sorted.length === tasks) {
        return true
    } else {
        return false
    }
}

console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2], [2, 0]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(6, [[0, 4], [1, 4], [3, 2], [1, 3]])}`)