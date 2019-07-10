/* Binary Search Tree 
    Full implementation 
    -- Insert
    -- Contain
    -- Depth First Traversal
    -- Breadth First Traversal
    -- Get Min 
    -- Get Max
*/

class bst {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    } 
 
    insert(value) {
        if(value <= this.value ) {
            if(!this.left) this.left = new bst(value) 
            else this.left.insert(value)
        } else if(value > this.value){
            if(!this.right) this.right = new bst(value)
            else this.right.insert(value)
        }
    }

    contains(value) {

        if(value == this.value) {
            return this
        } 
      
        if(value < this.value) {
            if(this.left) return this.left.contains(value)
        } else if (value > this.value) {
            if(this.right) return this.right.contains(value)
        }
        return null
    }


    depthFirstTraversal(iteratorFunc, order) {

        if(order === 'pre-order') iteratorFunc(this.value)
        if(this.left) {
            this.left.depthFirstTraversal(iteratorFunc, order)
        } 
        if(order === 'in-order') iteratorFunc(this.value)
        if(this.right) {
            this.right.depthFirstTraversal(iteratorFunc, order)
        }
        if(order === 'post-order') iteratorFunc(this.value)
    }

    breadthFirstTraversal(iteratorFunc) {
        let queue = [this]

        while(queue.length) {
            let treeNode = queue.shift()
            iteratorFunc(treeNode.value)
            if(treeNode.left) queue.push(treeNode.left) 
            if(treeNode.right) queue.push(treeNode.right)
        }
    }

    getMinValue() {

        if(this.left) {
            return this.left.getMinValue()
        } else {
            return this.value
        }
    }

    getMaxValue() {
        if(this.right) {
            return this.right.getMaxValue()
        } else {
            return this.value
        }
    }
}

const log = (value) => {
    console.log(value)
} 

var bst_1 = new bst(50)
// console.log(bst_1)
bst_1.insert(30)
bst_1.insert(70)
bst_1.insert(100)
bst_1.insert(60)
bst_1.insert(59)
bst_1.insert(20)
bst_1.insert(45)
bst_1.insert(35)
bst_1.insert(85)
bst_1.insert(105)
bst_1.insert(10)

// console.log(bst_1.right.right.left.left)

// console.log(bst_1.contains(15))
// bst_1.depthFirstTraversal(log, 'post-order')
// bst_1.breadthFirstTraversal(log)

console.log(`MIN: ${bst_1.getMinValue()}`)
console.log(`MAX: ${bst_1.getMaxValue()}`)