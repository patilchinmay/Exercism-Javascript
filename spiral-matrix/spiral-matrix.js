// We will use recursion to solve this
// Any matrix greater than size 2, contains another similar matrix inside it with value of inner spiral starting at 4*size-3.
export class SpiralMatrix {
  static ofSize(size) {
    let spiralMatrix = SpiralMatrix.spiralize(size);

    return spiralMatrix;
  }

  static spiralize(size){

    if(size == 1) return [[1]]; // Declaring [][] so that it can be accessed as innerSpiralMatrix[0][0] when the size = 3 on line 43.
    
    let spiralMatrix = [];
    let innerSpiralMatrix = [];
    
    if(size > 2){
      innerSpiralMatrix = SpiralMatrix.spiralize(size-2);
    }

    for(let i = 0; i < size; i++ ){
      spiralMatrix[i] = [];
      for (let j = 0; j < size; j++) {
        // First Row
        if(i == 0){
          spiralMatrix[i][j] = j+1;
        }
        // Last Column
        if(j == size-1){
          spiralMatrix[i][j] = size+i;
        }
        // Last Row
        if(i == size-1){
          spiralMatrix[i][j] = (3*size - 2) - j;
        }
        // First Column
        if(j == 0 && i != 0){
          spiralMatrix[i][j] = (4*size-4) - (i-1);
        }
        // Fill the middle of matrix from the result obtained from recursion.
        if(i != 0 && j != 0 && i < size-1 && j < size-1){
          spiralMatrix[i][j] = innerSpiralMatrix[i-1][j-1] + (4*size-4);
        }

      }
    }

    return spiralMatrix;
  }
}