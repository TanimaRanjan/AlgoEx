class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const traverse = function(root) {
  result = [];
  let queue = [root]

  while(queue.length> 0) {
    let len = queue.length
    let level = []
    while(len > 0) {
      let node = queue.shift()
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
      len--
      level.push(node.value)
    }
    result.push(level)
  }
    console.log(result)
  return result;
};



var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
