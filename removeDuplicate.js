const removeDuplicate = (arr) => {
 
    arr.splice(0,arr.length, ...(new Set(arr)))

    
    for(let i=0;i<arr.length;i++) {
        let count=0
        let j=i
        while(i<arr.length && arr[i] == arr[i-1]) {
            count++
            i++
        } 
        arr.splice(j,count)
        i=i-count
    }
    console.log(arr)


}

removeDuplicate([1,1,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4])