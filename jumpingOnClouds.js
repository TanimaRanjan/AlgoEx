const jumpingOnClouds = (arr) => {

    let a = 0
    let count=0
    while(a<arr.length-1) {
        if(arr[a+2] == 1) {
            a = a + 1
            count++
        } else {
            a = a + 2
            count++
        }

    }
    console.log(a, count)
    return a
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])
jumpingOnClouds([0, 0, 0, 0, 1, 0])
