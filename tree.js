// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree


class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter((child) => child.data !== data )
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF() {
        let arr = [this.root];
        let traverse = []

        while(arr.length) {
            let node = arr.shift();
            traverse.push(node.data);
            arr.push(...node.children)
        }
        return traverse;
    }

    traverseDF() {
        let arr = [this.root];
        let traverse = [];

        while(arr.length) {
            let node = arr.shift();
            traverse.push(node.data);
            arr.unshift(...node.children);
        } 
        return traverse;
    }
}

const node = new Node(20);
node.add(0);
node.add(40);
node.add(15);

const tree = new Tree();
tree.root = node;

node1 = node.children[0];
node1.add(12);
node1.add(-2);
node1.add(1);

node2 = node.children[2];
node2.add(-2);


console.log(tree.traverseBF());

console.log(tree.traverseDF());