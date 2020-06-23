// Graph
class Graph {

    constructor(vertices) {
        this.noOfVertices = vertices
        this.adjList = new Map()
    }

    addVertices(v) {
        this.adjList.set(v, [])
    }    
    addEdge(v,w) {
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)  
    }
    printGraph() {
        let get_keys = this.adjList.keys()

        for(let i of get_keys) {
            let get_values = this.adjList.get(i)
            let conc = ''
            for(let j of get_values) {
                conc += j + ' '
            }
            console.log(`${i} -> ${conc}`)
        }
    }

    bfs(startingNode) {
        let visited = []
        let queue = []

        visited[startingNode] = true
        queue.push(startingNode)

        while(queue.length > 0) {

            let element = queue.shift()

            console.log(element)

            let get_list = this.adjList.get(element)
            get_list.forEach(neigh => {
                if(!visited[neigh]) {
                    visited[neigh] = true
                    queue.push(neigh)
                }
            }) 
        }
    }

    dfs(startingNode) {
        let visited = []
        this.dfs_util(startingNode, visited)
    }

    dfs_util(vertex, visited) {
        visited[vertex] = true
        console.log(vertex)

        let get_node = this.adjList.get(vertex)
        get_node.forEach(node => {
            if(!visited[node]) {
                this.dfs_util(node, visited)
            }
        })
    }
}

let graph = new Graph(6)
let vertices = ['A', 'B', 'C', 'D', 'E', 'F']

vertices.forEach((vertex) => {
    graph.addVertices(vertex)
})

graph.addEdge('A', 'B')
graph.addEdge('A', 'D')
graph.addEdge('A', 'E')
graph.addEdge('B', 'C')
graph.addEdge('D', 'E')
graph.addEdge('E', 'F')
graph.addEdge('E', 'C')
graph.addEdge('C', 'F')

console.log('Print')
graph.printGraph()
console.log('BFS')
graph.bfs('A')

console.log('DFS')
graph.dfs('A')