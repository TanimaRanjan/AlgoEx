const rotateMatrix = (mat) => {

    console.log(mat)
    const totalLayers = Math.floor(mat.length/2)
    console.log('totalLayers ',totalLayers)

    for(let layers = 0;layers<totalLayers;layers++) {
        let lastIndex = mat.length - 1 - layers
       
        for(let forwardI = layers; forwardI < lastIndex ; forwardI++) {
           
            let reverseI = lastIndex - forwardI + layers

            let temp1 = mat[layers][forwardI]
            let temp2 = mat[forwardI][lastIndex]
            let temp3 = mat[lastIndex][reverseI]
            let temp4 = mat[reverseI][layers]

            console.log(temp1, temp2, temp3, temp4)
             mat[layers][forwardI] = temp4
             mat[forwardI][lastIndex] = temp1
             mat[lastIndex][reverseI] = temp2
             mat[reverseI][layers] = temp3
             
        
        }
        
    }

    console.log(mat)
}



rotateMatrix([[01, 02, 03, 04, 05],
    [06, 07, 08, 09, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]])