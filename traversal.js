/* 
Traversal 
The task is to traverse the given linked list in straight order.
*/

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0 
  }
  addItem(value) {
    let node = new Node(value)
    if(this.head === null) {
      this.head = node 
      this.size++
    } else {
      let current = this.head
      while(current.next) {
        current = current.next 
      }
      current.next = node
      this.size++
    }
    console.log(this)
  }
  
}
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

const linkedList = new LinkedList()

linkedList.addItem(1)
linkedList.addItem(2)
linkedList.addItem(3)

const traversedNodeValue = [];

const traversalCallback = (nodeValue) => {
    traversedNodeValue.push(nodeValue)
}

const  traversal = (linkedList, traversalCallback) => {
    let currentNode = linkedList.head

    while(currentNode) {
        traversalCallback(currentNode.value)
        currentNode = currentNode.next
    }
}

console.log(traversal(linkedList, traversalCallback))

console.log(traversedNodeValue)