/* 
    Binary Search Tree 
*/

class Node {
    constructor(item) {
        this.item = item
        this.left = null
        this.right = null
    }
    insert(item) {
        
        if(item < this.item && this.left) {
            this.left.insert(item)
        } else if(item < this.item) {
            this.left = new Node(item);
        } else if(item > this.item && this.right) {
            this.right.insert(item);
        } else if(item > this.item) {
            this.right = new Node(item);
        }
    }

    contains(item) {
        if(this.item === item) {
            console.log("found, ", this)
            return this;
        }

        if(item < this.item && this.left) {
            return this.left.contains(item);
        } else if (item > this.item && this.right) {
            return this.right.contains(item);
        } 
        return null;
    }

}
let bst = new Node(50);

bst.insert(20);
bst.insert(70);
bst.insert(30);
bst.insert(10);
bst.insert(60);
bst.insert(80);
// console.log(bst);

let result = bst.contains(20);
console.log(result);

const validate = (node, min=null, max=null) => {
    if(max != null && node.item > max) {
        return false;
    }

    if(min != null && node.item < min) {
        return false;
    }

}
