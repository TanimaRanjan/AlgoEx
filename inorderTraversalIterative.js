// **iterative solution**
function inorderTraversalIterative(root) {
  let callStack = [];
  let current = root;
  let result = [];
  while (true) {
    while (!!current) {
        callStack.push(current);
        current = current.left;
    }
    if (callStack.length == 0) break;
    let lastCurrent = callStack.pop();
      result.push(lastCurrent);
      current = lastCurrent.right;
  }
}