class Node { 

    constructor(item, next=null) {
        this.item = item;
        this.next = next;
    } 
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        // let node = new Node(item);
        // if(!this.head) {
        //     this.head = node;
        //     return;
        // } 

        // let current = this.head;
        // node.next = current;
        // //current.next = null;
        // this.head = node;

        this.head  = new Node(item, this.head);
        
    }

    getSize() {

        let current = this.head;
        let size = 0;

        while(current) {
            size++;
            current = current.next;
        }
        return size;
    }

    getFirst() {

        return this.head.item;
    }

    getLast() {

        if(!this.head) {
            return null;
        }
        let current = this.head;

        while(current.next) {
            current = current.next;
        }
        return current;
    }

    clearList() {
        this.head = null;
    }


    removeFirst() {

        if(!this.head) {
            return null;
        }
        let current = this.head;
        this.head = current.next;

        return current;
    }

    removeLast() {

        if(!this.head) {
            return null;
        }

        let current = this.head;
        let prev = null;
        while(current.next) {
            prev = current; 
            current = current.next;
        }

        prev.next = null;
        return current;
    }

    printList() {

        if(!this.head) {
            return null;
        }

        let current = this.head;
        let str = "";
        while(current) {
            str += current.item + " => "
            current = current.next;
        }

        return str;
    }

    insertLast(item) {

        let last = this.getLast();
       
        if(last) {

            last.next = new Node(item);
        } else
        {
            this.head = new Node(item); 
        }  

    }

    getAt(index) {

        let i=0;
        if(index < 0 || this.head === null) {
            return null;
        }

        let current = this.head;
        while(current) {
            if(i==index) {
                return current;
            }
            i++;
            current = current.next;
        }

            return null;

    }

    removeAt(index) {

        let i=0;
        if(index < 0 || this.head === null) {
            return null;
        }

        let current = this.head;
        let prev = null;

        if(index === 0) {
            this.head = current.next;
            return current.item;
        }

        
        while(current) {

            if(i === index) {
                let item = current.item;
                prev.next = current.next;
                return item;
            }
            i++;
            prev = current;
            current = current.next;
        }

        return null;

    }
    
    insertAt(item, index) {

        if(index < 0 || this.head === null) {
            return null;
        }

        let current = this.head;
        let prev = null;

        if(index === 0) {
            this.head = new Node(item, this.head);
            return ;
        }

       
        let i = 0;
        while(current) {
            if(i===index) {
                let node = new Node(item);
                prev.next = node;

                node.next = current;
            } 
            i++;
            prev = current;
            current = current.next;
        }

    }

    forEach(fn) {
        let node = this.head;
        let i=0;
        while(node) {
            fn(node, i);
            node = node.next;
            i++;
        }
    }

   

}


let ll = new LinkedList();

ll.insertFirst(10);
ll.insertFirst(20);
ll.insertFirst(30);
ll.insertFirst(40);
ll.insertFirst(50);
ll.insertFirst(60);
ll.insertFirst(70);
ll.insertFirst(80);
ll.insertFirst(90);
// ll.insertFirst(100);

// console.log(ll.getFirst())
// console.log(ll);
// console.log(ll.getSize());

// console.log(ll.getLast())

// ll.clearList();
// console.log(ll.removeFirst());
// console.log(ll);
// console.log(ll.removeLast());
// console.logx(ll.printList());

// console.log(ll.getAt(5));
// console.log(ll.printList());
// console.log(ll.removeAt(0));
// console.log(ll.printList());
// ll.insertAt('Hi', 0);
// console.log(ll.printList());
// console.log(ll.getAt(5));

// ll.forEach((node) => {
//     node.data += 10;
// });

console.log(ll.printList());


const findMidPoint = (ll) => {
    let slow = ll.head;
    let fast = ll.head;
    while(fast.next && fast.next.next) {
        slow = slow.next; 
        fast = fast.next.next;
    }
    return slow.item;

}


//findMidPoint(ll); 
console.log(findMidPoint(ll));



/* 
Give a linked list and integer n. return the element n spaces from the last node. 
Do not call the size function. 
Assume n is less than length of the list. 
*/ 

const fromLast = (list, n) => {
    let slow= list.head;
    let fast=list.head;

    for(let i=0;i<n;i++) {
        fast = fast.next;
    }

    console.log(`slow ${slow.item} fast ${fast.item}`);
    while(fast.next) {
        slow=slow.next;
        fast=fast.next;
        console.log(`slow ${slow.item} fast ${fast.item}`);
    }
    console.log(`End slow ${slow.item} fast ${fast.item}`);

    return slow.item;
}

const ll1 = new LinkedList();
ll1.insertLast('a');
ll1.insertLast('b');
ll1.insertLast('c');
ll1.insertLast('d');
// ll1.insertLast('e');
// ll1.insertLast('f');
// ll1.insertLast('g');
console.log(fromLast(ll1,2)); // b