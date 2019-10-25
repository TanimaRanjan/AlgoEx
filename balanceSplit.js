const balanceSplit = (str) => {
    
    let count = 0 
    let result = 0

    for(let i=0;i<str.length;i++) {

        if (str[i] === 'L') count++ 
        else count--
        console.log(str[i])

        if(count==0) {
            result++
            console.log(i)
        } 
    }
    return result
    // let i =0;
    // let stack = []
    // let result = []
    // while (i<str.length) {

    //     if(stack.length == 0) {
    //         stack.push(str[i++])
    //     } else {
    //         if(str[i] !== stack[stack.length-1]) {
    //             let strC = stack.join('').concat(str.substr(i,stack.length))      
    //             i = i+stack.length;
    //             result.push(strC)
    //            // console.log(strC, result, i)
    //             stack = []

    //         } else {
    //             stack.push(str[i++])
    //            // i++
    //         }
    //     }
    //    // console.log('Looping ', result, i)
        
    // }

    // return result.length
}

//console.log(balanceSplit('RLRRLLRLRL'))
console.log(balanceSplit('RRLRRLRLLLRL'))