/* 
*    Linked List Implementation 
*/

class Node {
    constructor(item) {
        this.item = item
        this.next = null
    }
} 

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    add(item) {
        var node = new Node(item)

        var current

        if(this.head == null) {
            this.head = node
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++

    }

    insertAt(item, index) {
        if(index>0 && index > this.size) {
            return false
        } else {
            var node = new Node(item)
            var current, prev
            var it = 0

            if(index === 0) {
                node.next = head
                this.head = node
            } else {
                current = this.head
                while(it < index) {
                    it++
                    prev = current
                    current = current.next
                }

                node.next = current
                prev.next = node
            }
            this.size++
        }
    }


    removeFrom(index) {
        if(index > 0 && index > this.size) {
            return -1
        } else {
            var current = this.head
            var prev = current
            var it = 0

            if(index == 0) {
                this.head = current.next
            } else {
                while(it < index) {
                    it++
                    prev = current
                    current = current.next
                }
                prev.next = current.next
            }
            this.size--
            return current.item
        }
    }


    removeItem(item) {
        var current = this.head
        var prev = null
    
        while(current != null) {
            if(current.item === item) {
                if(prev == null) {
                    this.head = current
                } else {
                    prev.next = current.next
                }
                this.size--
                return current.item
            }
            prev = current
            current = current.next
        }    
        return -1
    }

    indexOf(item) {
        var count = 0
        var current = this.head

        while(current != null) {
            if(current.item == item) {
                return count
            }
            count++
            current = current.next
        }
        return -1
    }

    isEmpty() {
        return this.size == 0
    }

    size_of_list() {
        return this.size
    }

    printList() {
        var current = this.head
        var str = ""

        while(current) {
            str += current.item + " => "
            current = current.next
        } 
        console.log(str)
    }
}

var ll = new LinkedList() 

console.log("Is List Empty " + ll.isEmpty())

ll.add(10)

ll.printList()

console.log("Size of Linked List " + ll.size_of_list())

ll.add(20)
ll.add(30)
ll.add(40)
ll.add(50)

ll.printList()

console.log("Is Element removed "+ ll.removeItem(50))

ll.printList()

console.log("Index of 40 "+ll.indexOf(40))

ll.insertAt(60,2)

ll.printList();

console.log("Is List Empty "+ ll.isEmpty())

console.log("Size of Linked List " + ll.size_of_list())

console.log(ll.removeFrom(3))

ll.printList()


