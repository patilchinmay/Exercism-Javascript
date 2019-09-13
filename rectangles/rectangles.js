// We will first find all the crosses.
// Then for every pair of cross in the SAME ROW, we will try to find another pair of cross in same position(column) but in different row which essentially signifies a rectangle.

export class Rectangles {
  static count(rectangle) {
    // Create 2D array of given input
    let matrix = rectangle.map( row => row.split(''));
    if(matrix.length == 0 || matrix[0] == '') return 0;
    
    let crosses = [];
    
    for(let i = 0; i < matrix.length; i++){
      for(let j = 0;  j < matrix[0].length; j++){
        // Find a cross
        if(matrix[i][j] == '+'){
          // Find another cross in the same row
          for(let k = j; k  < matrix[0].length; k++){
            // Add the found pair of '+' i.e. (i,j) and (i,k) in crosses in the form of {i,j,k}
            if( j != k && matrix[i][k] == '+'){
              crosses.push({i,j,k});
            }
          }
        }
      }
    }

    let rectangleCount = 0;

    for(let x = 0; x<crosses.length ; x++){
      for(let y = x; y<crosses.length; y++){
        // For each {i,j,k} in crosses, search any other {i,j,k} in crosses such that i is different (different row) and j,k is same (same column). Signifies rectangle.
        if( x!=y && crosses[x].i != crosses[y].i && crosses[x].j == crosses[y].j && crosses[x].k == crosses[y].k){
          if(Rectangles.isEmptyRectangle(matrix, crosses, x, y) == false) rectangleCount++;
        }
      }
    }

    return rectangleCount;
  }

  static isEmptyRectangle(matrix, crosses, x, y){
    let isEmpty = false;
    let j = crosses[x].j;
    let k = crosses[x].k;
    // Check columns vertically if they are empty or not. ' ' and '-' shows incomplete (empty) rectangle.
    for (let i = crosses[x].i; i < crosses[y].i ; i++) {
      if(matrix[i][j] == ' ' || matrix[i][k] == ' ' || matrix[i][j] == '-' || matrix[i][k] == '-'){
        isEmpty = true;
      }
    }
    return isEmpty;
  }
}
