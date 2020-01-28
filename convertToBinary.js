const converToBinary = (n) => {
    let bin = ''
    let r = 0
    while (n>0) {
        r = n % 2;
        n = Math.floor(n/2)
        console.log(n)
        bin = r + bin
    }

    console.log(bin)
    return bin
}




const HammingDistance = (a,b) => {

    let ab = converToBinary(a)
    let bb = converToBinary(b)
    
    console.log(ab, bb)

    if(ab.length > bb.length) {
        bb = '0'.repeat(ab.length-bb.length) + bb
       
    } else {
        ab = '0'.repeat(bb.length - ab.length) + ab
    }

    console.log(ab, bb)
    let count = 0
    let i =0;
    while(i<ab.length) {
        if(ab[i] != bb[i]) {
            count++
        }
        i++
    }

    console.log(count)
}

HammingDistance(5, 100)