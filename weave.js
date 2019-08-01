// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There')

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


const queueOne = new Queue();
queueOne.enQueue(1);
queueOne.enQueue(2);
queueOne.enQueue(3);
queueOne.enQueue(4);


const queueTwo = new Queue();
queueTwo.enQueue('Hi');
queueTwo.enQueue('There');
queueTwo.enQueue('you');
queueTwo.enQueue('Hi');
queueTwo.enQueue('There');
queueTwo.enQueue('you');
queueTwo.enQueue('Hi');
queueTwo.enQueue('There');
queueTwo.enQueue('you');
queueTwo.enQueue('Hi');
queueTwo.enQueue('There');
queueTwo.enQueue('you');
queueTwo.enQueue('Hi');
queueTwo.enQueue('There');
queueTwo.enQueue('you');

const weave = (q1, q2) => {

    let qFinal = new Queue();

    while(!q1.isEmpty() || !q2.isEmpty()) {
        if(!q1.isEmpty()) {
            qFinal.enQueue(q1.deQueue());
        } 
        if(!q2.isEmpty()) {
            qFinal.enQueue(q2.deQueue());
        }
        console.log(qFinal.printQueue());
    }

    return qFinal;



}

const q = weave(queueOne, queueTwo);
console.log(q.deQueue()); 
console.log(q.deQueue()); 
console.log(q.deQueue()); 
console.log(q.deQueue()); 
console.log(q.deQueue()); 
console.log(q.deQueue()); 
console.log(q.deQueue()); 
console.log(q.deQueue()); 


