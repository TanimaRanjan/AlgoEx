// --- Directions
// Find the width of tree


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


const levelWidth = (tree) => {
    let counter = [0];
    let arr = [tree.root, 's'];
    
    while(arr.length > 1) {

        const node = arr.shift();

        if(node === 's') {
            counter.push(0);
            arr.push('s');
        } else {
            arr.push(...node.children);
            counter[counter.length -1]++;
        }

    }

    return counter;

}

console.log(levelWidth(tree));