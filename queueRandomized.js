/* 
    Randomized Queue 
*/ 

class Queue {
    constructor() {
        this.item = []
    }

    enQueue(item) {
        if(item == null) {
            console.log("Please pass item to add ") 
        } else {
            this.item[this.item.length] = item
        }
    }

    deQueue() {
        var removeItem = Math.random() * this.item.length
        console.log("Removing "+removeItem)

        console.log("Before Remove " + this.item)
        var returnItem = this.item.splice(removeItem, 1)
        
        console.log("After Remove "+ this.item)
        console.log("Removing "+returnItem)

    }

    printQueue() {
        var str = ""
        for(var i=0;i<this.item.length;i++) {          
            str += this.item[i] + " "
        }
        return str
    }

    sample() {
      
        var sample = Math.floor(Math.random() * this.item.length)
      //  console.log(Math.floor(sample))
        return this.item[sample]
     
    }

}

var q = new Queue()
 
q.enQueue(10)
q.enQueue(20)
q.enQueue(30)
q.enQueue(40)
q.enQueue(50)
q.enQueue(10)
console.log(q.sample())
q.enQueue(20)
q.enQueue(30)
q.enQueue(40)
q.enQueue(50)
q.enQueue(10)
q.enQueue(20)
q.enQueue(30)
q.enQueue(40)
q.enQueue(50)

console.log(q.printQueue())

q.deQueue()
q.deQueue()
q.deQueue()
q.deQueue()

console.log(q.printQueue())
