var gcdOfStrings = function(str1, str2) {
    if (str1.length === str2.length) {
        if (str1 == str2) {
            return str1.length
        } else {
            return 0
        }
    }
    
    if (str1.length < str2.length) {
        [str1, str2] = [str2, str1]        
    }
    if (str1.indexOf(str2) == 0) {
        return gcdOfStrings(str1.substring(str2.length, str1.length), str2)
    } else {
        return 0
    }
};

//console.log(gcdOfStrings('bcdbcdbcdbcd','bcdbcd'))

const getDivisibleString =(s, t) => {

    if(s.length % t.length ===0) {
        // let arrayS =s.match(new RegExp('.{1,' + t.length + '}', 'g'));
        // arrayS.every((sub) => sub===t)
        if(matchpattern(s,t)) {
        

            for(let i=1;i<=t.length/2;i++) {
                let pattern = t.substring(0,i)
                console.log(pattern)
                if(matchpattern(t,pattern)) {
                    return pattern.length
                }
            } 
            return t.length
        } 

    } 
    return -1
    
}


// const matchpattern = (str,pattern) => {
//     let arrayS  = str.match(new RegExp(`.{1,${pattern.length}}`, 'g'))
//     //let arrayS =str.match(new RegExp('.{1,' + pattern.length + '}', 'g'));
//     return arrayS.every((sub) => sub===pattern)


// }

function findSmallestDivisor(s, t) {
    // Write your code here
    let tlen = t.length
    let slen = s.length
    if(slen % tlen ===0) {
        if(matchPattern(s,t)) {

           for(let i=1;i<=tlen/2;i++) {
               let pattern = t.substring(0,i)
               //console.log(pattern)
               if(matchPattern(t,pattern)) {
                   console.log(pattern)
                   return pattern.length
               }
           } 
            return tlen
        }
    }
    return -1
}

function matchPattern(str,pattern) {
    let arr = str.match(new RegExp(`.{1,${pattern.length}}`, 'g'))
    console.log(arr,str, arr.every((sub => sub === pattern)))
    return arr.every((sub => sub === pattern))
}

function matchPat(str,pattern) {
    let remain = str
    let current = str.indexOf(pattern)

    while(current === 0) {

        if(current + pattern.length === remain.length) {
            return true
        }
        remain = remain.substring(current+pattern.length)
        current = remain.indexOf(pattern)
    }

    return false
}

