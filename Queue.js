
class QueueA {

    constructor() {
        this.item = [];
    }

    add(num) {
        return this.item.unshift(num);
    }

    remove() {
        return this.item.pop();
    }

    printQ() {

        var str = "";

        for(let i=0;i<this.item.length;i++) {
            str += " " + this.item[i];
        }

        return str;
    }
}


var q = new QueueA();
 
q.add(1);
q.add(2);
q.add(3);
q.add(4);
console.log(q.printQ());

console.log(q.remove());

console.log(q.printQ());
