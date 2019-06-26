class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    addItem(item) {
        let node = new Node(item) 

        if(this.head === null) {
            this.head = node
            this.tail = node
        } else {
            let current = this.head
            while(current.next) {
                current = current.next
            }
            node.prev = current
            current.next = node
            this.tail = node
        }
        this.size++
    } 
    addItemAt(item, index) {

        if(index > 0 && index>this.size) {
            return false
        } else {
            let node = new Node(item)
            let current = this.head
            let ind = 0

            while(ind<index-1) {
                current = current.next
                ind++    
            }
            node.prev = current
            node.next = current.next
            current.next = node
           }
           this.size++
    }

    removeHead() {
        if(!this.head) return false

        let val = this.head.item
        this.head = this.head.next

        if(this.head) this.head.prev = null
        else this.tail = null
        this.size--
        return val
    }

    remove() {
        if(!this.head) return false

        let val = this.tail.item

        this.tail = this.tail.prev
        if(this.tail) this.tail.next = null
        else this.head=null
        this.size--
        return val
    }

    search(searchVal) {

        if(!this.head) return false

        let current = this.head
        let count = 0
        while(current) {
            if(current.item === searchVal) {
                return current.item
            }
            count++
            current = current.next
        }
        return false
    }

    findIndexOf(searchVal) {
        let current = this.head
        let indexVal = []
        let count = 0
        while(current) {
            if(current.item === searchVal) indexVal.push(count)
            count++
            current = current.next
        }
        return indexVal
    }

    printList() {
        let printList = ''
        let current = this.head
        while(current) {
            
            printList += `${current.item} => `

            current = current.next            
        }
        console.log(printList)
       //return printList
    }
} 

class Node {
    constructor(item, next, prev) {
        this.item = item
        this.next = null
        this.prev = null
    }
}


const ll = new LinkedList()

// console.log(ll)
ll.addItem(10)
// console.log(ll)
ll.addItem(20)
ll.addItem(30)
ll.addItem(40)
ll.addItem(10)
ll.addItem(50)
ll.addItem(10)
ll.addItem(60)
ll.printList()

ll.addItemAt(33,3)
//  console.log(ll)
ll.printList()

// console.log(ll.removeHead())
ll.printList()

// console.log(ll)

// console.log(ll.remove())

ll.printList()

//console.log(ll)

// console.log(ll.search(50))
console.log(ll.findIndexOf(10))