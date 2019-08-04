
class Stack {
    constructor() {
        this.item = []
    }

    push(item) {
        this.item.push(item)
    }

    pop() {
        if(this.item.length == 0) return "underflow" 
        return this.item.pop()
    }

    peek() {
        return this.item[this.item.length -1]
    }

    isEmpty() {
        return this.item.length === 0
    }

    printStack() {
        var str = ""
        for (var i=0;i<this.item.length ; i++) {
            str += this.item[i] + " "
        }
        return str
    }
}

class Queue {

    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    add(num) {
        
        this.s1.push(num);
       // console.log(this.s1);

    }

    remove() {

        while(!this.s1.isEmpty()) {
            this.s2.push(this.s1.pop());
        }

       let result= this.s2.pop();

        while(!this.s2.isEmpty()) {
            this.s1.push(this.s2.pop());
        }
        //console.log(this.s1);
        return result;
    }
    
    peek() {

    }
}

let q = new Queue();

q.add(10);
q.add(20);
q.add(30);
q.add(40);
q.add(50);
// console.log(q);

console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
q.add(60);
console.log(q.remove());
q.add(70);
console.log(q.remove());
q.add(80);
console.log(q.remove());
q.add(90);

console.log(q);