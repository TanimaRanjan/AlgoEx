// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
// If the value isn't in the tree return null.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data)
        } else if (data < this.data) {
            this.left = new Node(data)
        } else if (data > this.data && this.right) {
            this.right.insert(data)
        } else if (data > this.data) {
            this.right = new Node(data)
        }
    }

    contains(data) {
        if(this.data === data) {
            return this;
        }

        if(this.data < data && this.right) {
            return this.right.contains(data)
        } else if(this.data > data && this.left) {
            return this.left.contains(data)
        }
        return null
    }
}

module.exports = Node;


/// Test --- 
const node = new Node(10)
node.insert(5)
node.insert(15)
node.insert(17)

console.log(node.left.data)
console.log(node.right.data)
console.log(node.right.right.data)
console.log(node.data)

console.log("Another Test ")

node2 = new Node(10)
console.log(node2.data)
node2.insert(5)
node2.insert(15)
node2.insert(20)
node2.insert(0)
node2.insert(-5)
node2.insert(3)

console.log(node2.left.left.right.data)

console.log(node.contains(9999))

