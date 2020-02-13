const find_missing_number = (arr) => {
    const n = arr.length + 1

    let x1 = 1

    for(let i=2;i<=n;i++) {
        console.log('Before ',x1)
        x1 = x1 ^ i
        console.log('After ', x1)
    }
    console.log('Next')
    let x2 = arr[0]
    for(let i=1;i<n-1;i++) {
        console.log('Before ',x2)
        x2 = x2 ^ arr[i]
        console.log('After ', x2)
    }

    console.log(x1 ^ x2)
}

find_missing_number([1,5,2,6,4])

