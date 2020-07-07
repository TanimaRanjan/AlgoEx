

const findHeight = function(arr) {

    let depth = new Array(arr.length).fill(0)
    let maxheight = 0
    depth[0] = 1
    let i=1
    while(i < arr.length ) {
        let parent = Math.floor((i-1)/2)
        if(arr[i] !== -1) {
            depth[i] = depth[parent]+1
            console.log('depth ', depth)
            maxheight = Math.max(maxheight, depth[i])
        }
        i++
    }
   
    console.log(maxheight, depth)

    return maxheight
}

// const findDepth = function(arr, i, position, depth, pos) {

//     console.log(`arr ${arr} arr[i] ${arr[position]} i ${i} position ${position} depth ${depth} , ${pos} , ${arr.length}`)
//     if (position >= arr.length) {
//         console.log('return')
//         return
//     }  

//     if(depth[position] !== 0) {
//         return
//     }

//     if(arr[position] == -1) {
//         return
//     }

//     //Left 
//     // findDepth(arr, )
//     if(arr[position] !== -1) {
//         depth[position] = i
//     }
    
//    // console.log(`arr ${arr} arr[i] ${arr[position]} i ${i} position ${position} depth ${depth} , ${pos} , ${arr.length}`)
    
//   //  if(depth[i] === 0) {
//         let left = findDepth(arr, i+1, (2*i)+1, depth, 'left')
//         let right = findDepth(arr, i+1, (2*i)+2, depth, 'right ')
//   //  }

//   //  depth[i] = i+1
// }


console.log(findHeight([1, 5, 5, 2, 2, -1, 3]))

 console.log(findHeight([1, 2, 3, 4, -1, -1, -1]))
