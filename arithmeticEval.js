 /* 
Arithimetic Expression Evaluation 
*/ 

// (1 + (( 2 + 3 ) * ( 4 * 5 )))

function evaluation(str) {

    var array = str.split(" ").join("").split("")
    console.log(eval(str))

    var number = new Stack()
    var expression = new Stack()

    for(var i=0; i<array.length; i++) 
    {
        if(array[i] != "(") {
            if(array[i] === "*" || array[i] === "+" || array[i] === "-" || array[i] === "/" || array[i] === "%") {
                expression.push(array[i])

            } else if(array[i] === "1" || array[i] === "2" 
                || array[i] === "3" || array[i] === "4" 
                || array[i] === "5" || array[i] === "6" 
                || array[i] === "7" || array[i] === "8" 
                || array[i] === "9" || array[i] === "0" 
            ) {
                number.push(array[i])

            } else if(array[i] === ")") {
                var num1 = number.pop() 
                var num2 = number.pop()
                var expr = expression.pop()
                number.push(eval(parseInt(num1) + expr + parseInt(num2)))
            }
        }
    }
    console.log(expression)
    console.log(number)

} 

class Stack { 
    constructor() {
        this.item = []
    }
    push(item) {
        this.item.push(item)
    }
    pop() {
        return this.item.pop()
    }

}

evaluation("(1 + (( 2 + 3 ) * ( 4 * 5 )))")