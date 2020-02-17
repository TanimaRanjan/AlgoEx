class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

 
const find_minimum_depth = function(root) {
  
    let queue = [root]
    let level = 1
    let minDepth = Infinity
    while(queue.length > 0) {
        let len = queue.length
        
        while(len>0) {
            let node = queue.shift()

            if(node.left) {
                queue.push(node.left)
            } 
            if(node.right) {
                queue.push(node.right)
            }  
            if(node.right == null && node.left ==null) {
                minDepth = Math.min(minDepth, level)
            }
            len--
        }
        
        level++
  }
  return minDepth;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
