/* 
    Queue using Linked List 
*/

class Node {
    constructor(item) {
        this.item = item
        this.next = null
    }
}

class QueueLinkedList {
    constructor() {
        this.first = null
        this.last = null
    }

    enQueue(item) {
       
        var node = new Node(item)
        var oldnode = this.last
        this.last = node
        this.last.next = null

        if(this.isEmpty()) {
            this.first = this.last
        } else {
            oldnode.next = this.last
        }
        
    }

    deQueue() {
        var oldnode = this.first
       // console.log(oldnode)

        if(this.isEmpty()) {
            return -1
        } else {
            this.first = this.first.next
        }
        return oldnode.item
    }

    isEmpty() {
        return this.first == null
    }

    printQueue() {
        var current = this.first
       
        var str = ""
        while(current != null) {
          //  console.log(current)
            str += current.item + " "
            current = current.next
        }
        //console.log("print Q "+str)
        return str
    }

}

var qll = new QueueLinkedList()

qll.enQueue(10)
qll.enQueue(20)
qll.enQueue(30)
qll.enQueue(40)
console.log(qll.printQueue())
console.log(qll.deQueue())
console.log(qll.printQueue())
qll.enQueue(50)
qll.enQueue(60)
qll.enQueue(70)
qll.enQueue(80)

console.log(qll.printQueue())

console.log(qll.deQueue())
console.log(qll.printQueue())
console.log(qll.deQueue())
console.log(qll.deQueue())
console.log(qll.printQueue())
console.log(qll.deQueue())
console.log(qll.deQueue())
console.log(qll.deQueue())
console.log(qll.deQueue())
console.log(qll.deQueue())
console.log(qll.deQueue())

console.log(qll.printQueue())