// Class Linked list creates a circular linked list 
// Function Circular Verifies if the LL is circular or not. 


class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    addItem(item) {
        var current 
        var node = new Node(item)
        if(this.head == null) {
            this.head = node

        } else {
            current = this.head
            //while(current.next) {
            for(var i=0;i<this.size-1;i++) {
                current = current.next
            }
            current.next = node
            // This makde the Linked List circular 
            // Point the last node to head 
            node.next = this.head
           
        }
        this.size++
    }
    
    printList() {
        var current = this.head
        var str = ""

        for(var i=0;i<this.size;i++) {
            str += current.item + " => "
          //  console.log(current.item)
            current = current.next
            //console.log(current.item)
        } 

        return str
    }

}

class Node {
    constructor(item) {
        this.item = item 
        this.next = null
    }
}


function circular(link) {

   // console.log(link)
    var head = link.head
    var curr , prev
    var size = link.size
    curr = head
    for(var i =0;i<size;i++) {
       // console.log(curr.item)
        curr = curr.next
    }
    if(curr === head) { 
        console.log("circular")
    } else {
        console.log("not circular")
    }


}

var ll = new LinkedList()

ll.addItem('a')
ll.addItem('b')
ll.addItem('c')
ll.addItem('d')
console.log(ll.printList())

circular(ll)

