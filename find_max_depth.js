class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

 
const find_maximum_depth = function(root) {
  
    let queue = [root]
    let maxDepth = 0
    while(queue.length > 0) {
        let len = queue.length
        maxDepth++
        while(len>0) {
            let node = queue.shift()
            if(node.left) {
                queue.push(node.left)
            } 
            if(node.right) {
                queue.push(node.right)
            }  
            len--
        }

  }
  return maxDepth;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_maximum_depth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_maximum_depth(root)}`)
