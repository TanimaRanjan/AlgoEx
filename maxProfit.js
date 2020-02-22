const maxProfit = (arr) => {

    let valley = arr[0]
    let peak = arr[0]
    let maxP = 0
    for(let i=0;i<arr.length;i++) {
        
        while(i<arr.length && arr[i] >= arr[i+1]) {
            i++
        }
        valley = arr[i]
        while(i<arr.length && arr[i] <= arr[i+1]) {
            i++ 
        }
        peak = arr[i] 
        maxP += peak - valley

    }
    console.log(maxP)
    return maxP
}

maxProfit([7,1,5,3,6,4])
maxProfit([1,2,3,4,5])
maxProfit([7,6,4,3,1])