let matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let R = matrix.length
    let C = matrix[0].length
    for(let i=0;i<R;i++) {
        for(let j=i;j<C;j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    for(let i=0;i<R;i++) {
        for(let j=0;j<C/2;j++) {
            [matrix[i][j], matrix[i][C-j-1]] = [matrix[i][C-j-1], matrix[i][j]]
        }
        
    }

};

rotate(matrix)