const maxSumOfNum = (arr) => {

    let res = arr.map((ele) => {
        return sumDigit(ele)
    })

    let sumList = new Map()
    for(let i=0;i<arr.length;i++) {
        let sum = sumDigit(arr[i])
        if(!sumList.has(sum)) {
            sumList.set(sum ,arr[i])
        } else {
            let temp = sumList.get(sum) + arr[i]
            sumList.set(sum, temp)
        }
    }


    console.log(Math.max(...Array.from(sumList.values())))


}

const sumDigit = (n) => {

    let sum = 0;
    while(n>0) {
        sum += n%10
        n = Math.floor(n/10)
    }

    return sum
}

maxSumOfNum([51,71,17,42])