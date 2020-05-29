class Node_clone {
    constructor(d) {
      this.data = d;
      this.neighbors = [];
    }
  }
  
  let clone = function(root) {
  
    let node_visited = {}
    clone_node(root, node_visited)
    return root
   
  };
  
  let clone_node = (vertex, node_visited) => {
    if(!vertex) return null
  
    let newNode = new Node_clone(vertex.data)
    node_visited[vertex.data] = newNode
  
    let node_list = vertex.neighbors
  
    node_list.forEach(node => {
  
      let x = node_visited[node.data] 
      if(!x) {
        newNode.neighbors.push(
            clone_node(node, node_visited)
        )
      } else {
        newNode.neighbors.push(x)
      }
  
    })
  
    return newNode
  }