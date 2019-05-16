/* 
    Implementation of Stack using Linked List
*/ 

// Linked List Node class
class Node {
    constructor(item) {
        this.item = item
        this.next = null
    }
}

// Linked List Class
class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(item) {
        console.log("Push - "+ item)
        var node = new Node(item)
        node.next = this.head
        this.head = node
    }   
    
    pop() {
        if(this.head == null) return -1
        var current = this.head
        this.head = current.next
        console.log("Pop - "+current.item)
        return current.item
    }

    printLL() {

        var current = this.head
        var str = ""

        while(current) {
            str += current.item + " => "
            current = current.next
        }
        console.log("Printing Linked List - " + str)
    }

}

var sll = new Stack() 

sll.pop()

sll.printLL()

sll.push("to")

sll.printLL()

sll.push("be")

sll.push("and")

sll.printLL()

sll.pop()

sll.printLL()

sll.push("not")

sll.push("to")

sll.printLL()

sll.pop()

sll.printLL()