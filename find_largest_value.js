class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const find_largest_value = function(root) {
    
    let result= []
    let queue = [root]

    while(queue.length>0) {
        let len = queue.length

        let maxNum = 0
        while(len > 0) {
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            maxNum = Math.max(maxNum, node.value)
            len--
        }

        result.push(maxNum)
    }
 
  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level max are: ${find_largest_value(root)}`)
