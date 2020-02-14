function flip_and_invert_image(matrix) {
  const C = matrix.length;
  for (var row = 0; row < C; ++row) {
    for (var col = 0; col < Math.floor((C + 1) / 2); ++col) {
        // XOR the values to invert the image
        let a = matrix[row][col] ^ 1
        let b = matrix[row][C - 1 - col] ^ 1
        // swap the elements to horizontally flip the image
        matrix[row][col] = b
        matrix[row][C - 1 - col] = a
    }
  }
  return matrix;
}

console.log(flip_and_invert_image([[1,0,1], [1,1,1], [0,1,1]]))
console.log(flip_and_invert_image([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))