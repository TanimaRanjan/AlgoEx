/* 
Stack in array 
*/

class Stack {
    constructor() {
        this.item = []
    }

    push(item) {
        this.item.push(item)
    }

    pop() {
        if(this.item.length == 0) return "underflow" 
        return this.item.pop()
    }

    peek() {
        return this.item[this.item.length -1]
    }

    isEmpty() {
        return this.item.length === 0
    }

    printStack() {
        var str = ""
        for (var i=0;i<this.item.length ; i++) {
            str += this.item[i] + " "
        }
        return str
    }
}

var stack = new Stack() 

console.log(stack.pop())
console.log(stack.pop())
stack.push(10)

stack.push(20)

stack.push(30)

console.log(stack.pop())

stack.push(30)

console.log(stack.printStack())

//console.log(this.item.length)