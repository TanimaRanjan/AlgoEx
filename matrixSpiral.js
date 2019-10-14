/* 
    Write a function that accepts an Integer N and return N*N spiral Matrix
*/

const matrixSpiral = (n) => {

    // Get the start , end of Row and Column
    let startRow = 0
    let endRow = n -1
    let startCol = 0
    let endCol = n - 1

    // Counter  - starts at 1 
    let counter = 1

    // Result Matrix  - 2D matrix
    let resultMatrix = new Array(n)

    for(let i=0; i< n; i++) {
        resultMatrix[i] = new Array(n)
    }

    while(startCol <= endCol && startRow <= endRow) {
        // Top Row 
        for(i=startCol; i<= endCol; i++) {
            resultMatrix[startRow][i] = counter
            counter++
        }
        startRow++        
        console.log(resultMatrix)
        // Last Column
        for(i=startRow; i<= endRow; i++) {
            resultMatrix[i][endCol] = counter
            counter++
        }        
        endCol--
        console.log(resultMatrix)


        // Bottom Row 
        for(i=endCol; i>= startCol; i--) {
            resultMatrix[endRow][i] = counter
            counter++
        }
        endRow--
        console.log(resultMatrix)
        // First Column
        for(i=endRow; i>= startRow; i--) {
            resultMatrix[i][startCol] = counter
            counter++
        }        
        startCol++
        console.log(resultMatrix)
        

    }


}


matrixSpiral(6)