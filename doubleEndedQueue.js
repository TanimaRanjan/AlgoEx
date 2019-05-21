/* 
    Double Ended Queue - DeQueu
*/ 

class DeQue {

    constructor() {
        this.item = []
    }

    addFirst(item) {
       
       if(item == null) {
            console.log("pass value to add ")
            return false
        } else {
     //   console.log("pass value to add ", item)
          //  this.item.unshift(item)
            var listnew = [item]
            for(var i=1;i<=this.item.length;i++) {
                listnew[i] = this.item[i-1]
            }
            this.item = listnew
        }
    }

    addLast(item) {
        
        if(item == null) {
            console.log("pass value to add ")
            return false
        } else {
         //   console.log("pass value to add ", item)
           // this.item.push(item)
           this.item[this.item.length] = item
        }

    }

    removeFirst() {
        return this.item.splice(0,1)[0] 
    }

    removeLast() {
        return this.item.splice(this.item.length-1, 1)[0]
    }

    printQueue() {
        var str = ""
        for(var i=0;i<this.item.length;i++) {
           
            str += this.item[i] + " "
         //   console.log(this.item[i])
        }
      //  console.log()
        return str
    }

}

var dQ = new DeQue() 

dQ.addFirst()

dQ.printQueue()

dQ.addFirst(10)

console.log(dQ.printQueue())

dQ.addFirst(20)

dQ.addFirst(30)

dQ.addFirst(40)

console.log(dQ.printQueue())

dQ.addLast(50)

console.log(dQ.printQueue())

dQ.addFirst('A')

dQ.addLast('Z')

console.log(dQ.printQueue())


dQ.addFirst('A')

dQ.addLast('Z')

console.log(dQ.printQueue())


dQ.addFirst('A')

dQ.addLast('Z')

console.log(dQ.printQueue())

console.log(dQ.removeFirst())

console.log(dQ.printQueue())

console.log(dQ.removeLast())

console.log(dQ.printQueue())