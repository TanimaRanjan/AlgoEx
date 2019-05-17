/* 
Queue using Array 
*/ 

class Queue {

    constructor() {
        this.item = []
    }

    enQueue(item) {
        
        this.item.push(item)
    }

    deQueue() {
        var olditem = this.item.splice(0, 1)
        return olditem[0]
    }

    isEmpty() {
        return this.item.length === 0 
    }

    printQueue() {
        var str = "" 

        for(var i=0; i<this.item.length; i++ ) {
            str += this.item[i] + " "
        }
        return str
    }

 }

 var q = new Queue()

 console.log(q.isEmpty())

 q.enQueue(10)
 q.enQueue(20)
 q.enQueue(30)
 q.enQueue(40)
 q.enQueue(50)
 q.enQueue(60)
 q.enQueue(70)

 console.log(q.printQueue())

 console.log(q.deQueue())
 console.log(q.deQueue())
 console.log(q.deQueue())

 console.log(q.printQueue())