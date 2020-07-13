class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const find_level_averages = function(root) {
  result = [];
  let queue = [root]

  while(queue.length>0) {
    let len = queue.length
    let i=0
    let sum = 0
    while(i<len) {
      let node = queue.shift()
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
      i++
      sum += node.value
    }
    result.push(sum/len)
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

console.log(`Level averages are: ${find_level_averages(root)}`)
